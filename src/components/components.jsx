/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gG0N6wWj6DQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden" style={{right: '-20%'}}> {/* Use style for custom positioning */}
              <Image
                src="/images/AdobeStock_767456269.jpeg"
                alt="Periospot AI"
                fill
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/10 to-transparent"></div>
            </div>
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 ml-10 py-12 md:py-24 lg:py-32">
                <div className="space-y-2 bg-gray-200/40 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-300/50"> {/* Updated styling */}
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-800">
                    Periospot AI: The Ultimate Scientific Evidence Analyzer
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Unlock the power of AI-driven dental research analysis. Periospot AI provides comprehensive insights,
                    customized reports, and bias identification to revolutionize your scientific decision-making.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-6"> {/* Increased padding-top */}
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Try Periospot AI
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white/50 px-8 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <ScanIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Scientific Analysis</h3>
                <p className="text-muted-foreground">
                  Leverage advanced AI algorithms to analyze scientific data and uncover meaningful insights.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <CheckIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Customized Reports</h3>
                <p className="text-muted-foreground">
                  Generate personalized reports that highlight key findings and recommendations.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <ContrastIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Bias Identification</h3>
                <p className="text-muted-foreground">
                  Detect and mitigate potential biases in your scientific data and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ContrastIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 18a6 6 0 0 0 0-12v12z" />
    </svg>
  )
}


function ScanIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}