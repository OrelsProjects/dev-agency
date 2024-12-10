import { PopupButton } from "react-calendly";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL as string;

export default function CalendlyLink({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return typeof window === "undefined" ? null : (
    <PopupButton
      url={calendlyUrl}
      text={text}
      className={className}
      rootElement={document.getElementById("calendly-portal")!}
    />
  );
}
