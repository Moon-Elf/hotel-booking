import { Ban, Loader2 } from "lucide-react";
const Button = ({ isLoading, allowed, ...rest }) => {
  return (
    <button
      disabled={isLoading || !allowed}
      className="btn btn-primary"
      {...rest}
    >
      Submit Now {isLoading && <Loader2 className="animate-spin" />}
      {!allowed && <Ban />}
    </button>
  );
};

export default Button;
