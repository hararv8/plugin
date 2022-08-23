import { Currency } from "../../types";
import { TokenSelect } from "./TokenSelect";
import { TokenChipPlaceholder } from "../common/TokenChipPlaceholder";

interface TokenInputProps {
  amount: string;
  onChangeInput?: (input: string) => void;
  updateToken: (token: Currency) => void;
  source?: boolean;
  activeToken?: Currency;
  tokens: Currency[];
  noTokens: boolean;
  tokenToDisable?: Currency;
}

export const TokenInput = (props: TokenInputProps) => {
  const {
    amount,
    onChangeInput,
    updateToken,
    source = false,
    activeToken,
    tokens,
    noTokens = false,
    tokenToDisable
  } = props;
  return (
    <div className="skt-w flex items-center justify-between mt-2.5 overflow-hidden">
      <div className="skt-w flex flex-1">
        <input
          className={`skt-w skt-w-input text-widget-primary text-3xl focus:outline-none w-full h-full overflow-ellipsis bg-transparent`}
          value={amount}
          onChange={(e) => onChangeInput(e.target.value)}
          placeholder="0.0"
          type={source ? "number" : "string"}
          onWheel={(e) => (document.activeElement as HTMLElement).blur()}
          inputMode="decimal"
          readOnly={!source}
        />
      </div>
      {noTokens ? (
        <TokenChipPlaceholder>No Tokens</TokenChipPlaceholder>
      ) : (
        <TokenSelect
          updateToken={updateToken}
          activeToken={activeToken}
          tokens={tokens}
          tokenToDisable={tokenToDisable}
        />
      )}
    </div>
  );
};
