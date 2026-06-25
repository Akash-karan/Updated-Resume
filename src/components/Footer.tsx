import { gmailComposeHref, site } from "@/lib/site";
import { XIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="dot-grid w-full px-4 pt-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-[1136px] flex-col justify-between gap-10 overflow-hidden rounded-t-[20px] bg-footer p-8 sm:h-[384px] sm:gap-6">
        {/* Top: links + socials */}
        <div className="flex w-full items-center justify-between">
          <nav className="flex items-center gap-6 sm:gap-8">
            <a
              href={site.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="px-[17px] py-1 text-[18px] font-medium text-white transition-colors hover:text-brand sm:text-[20px]"
            >
              Portfolio
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-[17px] py-1 text-[18px] font-medium text-white transition-colors hover:text-brand sm:text-[20px]"
            >
              Resume
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={site.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-white transition-colors hover:text-brand"
            >
              <XIcon className="h-6 w-6" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white transition-colors hover:text-brand"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Middle: CTA */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-sans text-[24px] font-medium leading-tight tracking-[-0.5px] text-white sm:text-[30px] sm:leading-[38px]">
            If you think I&apos;d be a good fit for your team,
          </p>
          <p className="font-sans text-[18px] font-bold text-[#667085] sm:text-[20px] sm:leading-[30px]">
            DROP ME A MAIL AND LET&apos;S MEET.
          </p>
        </div>

        {/* Bottom: copyright */}
        <div className="flex w-full flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <a
            href={gmailComposeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] font-medium text-white transition-colors hover:text-brand sm:text-[20px]"
          >
            {site.email}
          </a>
          <p className="text-[16px] font-medium text-white sm:text-[20px]">
            Made with love and some taste :&apos;)
          </p>
        </div>
      </div>
    </footer>
  );
}
