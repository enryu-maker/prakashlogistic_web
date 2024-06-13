import { Typography } from "@material-tailwind/react";
import { IMAGE } from "../Assets/Images";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-screen px-8 py-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <img src={IMAGE.pl} className="w-1/3 h-1/2" alt="" />
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-deep-orange-600"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">NerdTech</a>. All Rights
            Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.92 4.92 0 0 1 1.775 1.152 4.92 4.92 0 0 1 1.153 1.774c.247.635.416 1.362.465 2.426.047 1.024.06 1.379.06 3.808s-.013 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.426a4.92 4.92 0 0 1-1.153 1.775 4.92 4.92 0 0 1-1.774 1.153c-.635.247-1.362.416-2.426.465-1.024.047-1.379.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.426-.465a4.92 4.92 0 0 1-1.775-1.153 4.92 4.92 0 0 1-1.153-1.774c-.247-.635-.416-1.362-.465-2.426C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.426a4.92 4.92 0 0 1 1.153-1.775 4.92 4.92 0 0 1 1.774-1.153c.635-.247 1.362-.416 2.426-.465C9.531 2.013 9.885 2 12.315 2zm0 1.622c-2.394 0-2.687.011-3.63.052-.935.042-1.444.196-1.78.326-.448.172-.769.379-1.107.717a3.29 3.29 0 0 0-.717 1.107c-.13.336-.284.845-.326 1.78-.041.943-.052 1.236-.052 3.63s.011 2.687.052 3.63c.042.935.196 1.444.326 1.78.172.448.379.769.717 1.107.336.338.659.545 1.107.717.336.13.845.284 1.78.326.943.041 1.236.052 3.63.052s2.687-.011 3.63-.052c.935-.042 1.444-.196 1.78-.326.448-.172.769-.379 1.107-.717.338-.336.545-.659.717-1.107.13-.336.284-.845.326-1.78.041-.943.052-1.236.052-3.63s-.011-2.687-.052-3.63c-.042-.935-.196-1.444-.326-1.78a3.289 3.289 0 0 0-.717-1.107 3.289 3.289 0 0 0-1.107-.717c-.336-.13-.845-.284-1.78-.326-.943-.041-1.236-.052-3.63-.052zm0 4.09a5.29 5.29 0 1 1 0 10.579 5.29 5.29 0 0 1 0-10.578zm0 1.622a3.668 3.668 0 1 0 0 7.335 3.668 3.668 0 0 0 0-7.335zm5.438-.732a1.229 1.229 0 1 1-2.458 0 1.229 1.229 0 0 1 2.458 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
