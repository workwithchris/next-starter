import { ReactNode } from "react";

interface DesignIconProps {
  id: string;
  className?: string;
}

export function DesignIcon({ id, className = "h-5 w-5" }: DesignIconProps): ReactNode {
  switch (id) {
    case "claude":
      return (
        <svg viewBox="0 0 24 24" fill="#D97757" className={className} aria-label="Claude">
          <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
        </svg>
      );

    case "openai":
      return (
        <svg viewBox="0 0 24 24" fill="#10a37f" className={className} aria-label="OpenAI">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
      );

    case "gemini":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Google Gemini">
          <path
            d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z"
            fill="#1a73e8"
          />
        </svg>
      );

    case "cohere":
      return (
        <svg viewBox="0 0 24 24" fill="#ff6f61" className={className} aria-label="Cohere">
          <circle cx="9" cy="9" r="6" fill="#ff6f61" />
          <circle cx="15" cy="15" r="5" fill="#ff9085" />
          <circle cx="16" cy="8" r="4" fill="#39a0ed" />
        </svg>
      );

    case "elevenlabs":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="ElevenLabs">
          <path d="M8 4h3v16H8V4zm5 0h3v16h-3V4z" />
        </svg>
      );

    case "mistral":
      return (
        <svg viewBox="0 0 24 24" fill="#f54e00" className={className} aria-label="Mistral AI">
          <path d="M4 4h4v4H4V4zm12 0h4v4h-4V4zm-8 4h8v4H8V8zm-4 4h16v4H4v-4zm0 4h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
        </svg>
      );

    case "ollama":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Ollama">
          <path d="M12 2a4 4 0 0 0-4 4v2H7a3 3 0 0 0-3 3v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-6a3 3 0 0 0-3-3h-1V6a4 4 0 0 0-4-4zm-2 4a2 2 0 1 1 4 0v2h-4V6zm-1 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      );

    case "runway":
      return (
        <svg viewBox="0 0 24 24" fill="#ff3366" className={className} aria-label="Runway">
          <path d="M4 4h7a5 5 0 0 1 5 5 5 5 0 0 1-5 5H8v6H4V4zm4 4v3h3a2 2 0 0 0 0-4H8zm8 7.5L20 20h-4.5l-3.5-4.5h4z" />
        </svg>
      );

    case "together":
      return (
        <svg viewBox="0 0 24 24" fill="#00f2fe" className={className} aria-label="Together AI">
          <circle cx="7" cy="12" r="4" fill="#00f2fe" />
          <circle cx="17" cy="12" r="4" fill="#4facfe" />
          <path d="M7 12h10" stroke="#00f2fe" strokeWidth="2" />
        </svg>
      );

    case "xai":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="xAI">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );

    case "geist":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Geist / Vercel">
          <path d="m12 3 10 18H2L12 3Z" />
        </svg>
      );

    case "linear":
      return (
        <svg viewBox="0 0 24 24" fill="#5e6ad2" className={className} aria-label="Linear">
          <path d="M3.5 12a8.5 8.5 0 0 1 14.5-6L5.5 18.5a8.46 8.46 0 0 1-2-6.5zm3.5 7.5L19.5 7a8.5 8.5 0 0 1-12.5 12.5z" />
        </svg>
      );

    case "cursor":
      return (
        <svg viewBox="0 0 24 24" fill="#3b82f6" className={className} aria-label="Cursor">
          <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
        </svg>
      );

    case "raycast":
      return (
        <svg viewBox="0 0 24 24" fill="#ff6363" className={className} aria-label="Raycast">
          <path d="M3 13.5 10.5 6 12 7.5 4.5 15 3 13.5zm7.5 7.5L21 10.5 19.5 9 9 19.5l1.5 1.5zm-3-3L18 7.5 16.5 6 6 16.5l1.5 1.5z" />
        </svg>
      );

    case "resend":
      return (
        <svg viewBox="0 0 24 24" fill="#f5564a" className={className} aria-label="Resend">
          <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11zm2.6 0l6.4 5.3 6.4-5.3H5.6zm13.4 1.8l-6.5 5.4a.8.8 0 0 1-1 0L5 8.3v9.2c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V8.3z" />
        </svg>
      );

    case "warp":
      return (
        <svg viewBox="0 0 24 24" fill="#00d8d6" className={className} aria-label="Warp">
          <path d="M4 5h8v3H4V5zm0 5h16v3H4v-3zm0 5h12v3H4v-3zm14-10l4 4-4 4V5z" />
        </svg>
      );

    case "superhuman":
      return (
        <svg viewBox="0 0 24 24" fill="#6b46c1" className={className} aria-label="Superhuman">
          <path d="M12 2L2 9l10 7 10-7-10-7zm0 13L4 9.5V16l8 5 8-5V9.5L12 15z" />
        </svg>
      );

    case "supabase":
      return (
        <svg viewBox="0 0 24 24" fill="#3ecf8e" className={className} aria-label="Supabase">
          <path d="M21.362 9.354H12V.3a.3.3 0 0 0-.535-.187L.637 14.646a.3.3 0 0 0 .23.497H12v9.057a.3.3 0 0 0 .535.187l10.828-14.533a.3.3 0 0 0-.23-.497z" />
        </svg>
      );

    case "stripe":
      return (
        <svg viewBox="0 0 24 24" fill="#635bff" className={className} aria-label="Stripe">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.834.5 6.857.5 2.924 3.654 2.924 8.706c0 5.485 5.344 6.743 8.351 7.787 2.474.858 3.328 1.542 3.328 2.535 0 .979-.868 1.542-2.31 1.542-2.617 0-5.344-1.127-7.23-2.193l-.934 5.574c1.977 1.004 5.12 1.549 8.27 1.549 6.236 0 10.366-3.056 10.366-8.275 0-5.35-4.839-6.904-8.789-8.075z" />
        </svg>
      );

    case "clickhouse":
      return (
        <svg viewBox="0 0 24 24" fill="#facc15" className={className} aria-label="ClickHouse">
          <rect x="3" y="10" width="2.5" height="4" rx="0.5" />
          <rect x="7" y="6" width="2.5" height="12" rx="0.5" />
          <rect x="11" y="4" width="2.5" height="16" rx="0.5" />
          <rect x="15" y="8" width="2.5" height="8" rx="0.5" />
          <rect x="19" y="11" width="2.5" height="2" rx="0.5" />
        </svg>
      );

    case "planetscale":
      return (
        <svg viewBox="0 0 24 24" fill="#ff6e00" className={className} aria-label="PlanetScale">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#ff6e00" strokeWidth="2.5" />
          <path d="M12 3a9 9 0 0 1 9 9h-9V3z" fill="#ff6e00" />
        </svg>
      );

    case "cloudflare":
      return (
        <svg viewBox="0 0 24 24" fill="#f38020" className={className} aria-label="Cloudflare">
          <path d="M18.8 9.2A6.5 6.5 0 0 0 6.6 8a5 5 0 0 0-4.6 5 5 5 0 0 0 5 5h12a4 4 0 0 0 4-4 4 4 0 0 0-4.2-4.8z" />
        </svg>
      );

    case "tokyo-night":
      return (
        <svg viewBox="0 0 24 24" fill="#7aa2f7" className={className} aria-label="Tokyo Night">
          <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8A9.04 9.04 0 0 0 12 3z" />
          <circle cx="17" cy="6" r="1.5" fill="#bb9af7" />
          <circle cx="20" cy="9" r="1" fill="#7dcfff" />
        </svg>
      );

    case "brutalist":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="Brutalist">
          <rect x="3" y="3" width="8" height="8" />
          <rect x="13" y="3" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="3" y="13" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="13" y="13" width="8" height="8" />
        </svg>
      );

    case "nord":
      return (
        <svg viewBox="0 0 24 24" fill="#88c0d0" className={className} aria-label="Nord">
          <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" stroke="#88c0d0" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill="#81a1c1" />
        </svg>
      );

    case "catppuccin":
      return (
        <svg viewBox="0 0 24 24" fill="#cba6f7" className={className} aria-label="Catppuccin">
          <path d="M12 4C7.58 4 4 7.58 4 12c0 3.2 1.88 5.96 4.6 7.23L8 21l3-1.5c.33.05.66.08 1 .08 4.42 0 8-3.58 8-8s-3.58-8-8-8zm-3 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      );

    case "cyberpunk":
      return (
        <svg viewBox="0 0 24 24" fill="#facc15" className={className} aria-label="Cyberpunk">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );

    case "sunset":
      return (
        <svg viewBox="0 0 24 24" fill="#ff6b6b" className={className} aria-label="Sunset">
          <path d="M12 4a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7zm-9 9h18v2H3v-2zm2 4h14v2H5v-2zm3 4h8v2H8v-2z" />
        </svg>
      );

    case "dracula":
      return (
        <svg viewBox="0 0 24 24" fill="#bd93f9" className={className} aria-label="Dracula">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3 9l1.5 4L9 15zm6 0l1.5 4L15 15z" />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitHub">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );

    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" fill="#38bdf8" className={className} aria-label="Tailwind CSS">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
