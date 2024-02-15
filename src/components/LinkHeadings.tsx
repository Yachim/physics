import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

type Props = {
  id: string
  children: React.ReactNode
}
function LinkH({ id, children, type }: Props & {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}) {
  const content = (
    <Link href={`#${id}`}>
      {children}
      &nbsp;<FontAwesomeIcon className="link-icon" icon={faLink} />
    </Link>
  )

  switch (type) {
    case "h1":
      return <h1 className="link-h" id={id}>{content}</h1>
    case "h2":
      return <h2 className="link-h" id={id}>{content}</h2>
    case "h3":
      return <h3 className="link-h" id={id}>{content}</h3>
    case "h4":
      return <h4 className="link-h" id={id}>{content}</h4>
    case "h5":
      return <h5 className="link-h" id={id}>{content}</h5>
    case "h6":
      return <h6 className="link-h" id={id}>{content}</h6>
  }
}

export const LinkH1 = (props: Props) => LinkH({ ...props, type: "h1" })
export const LinkH2 = (props: Props) => LinkH({ ...props, type: "h2" })
export const LinkH3 = (props: Props) => LinkH({ ...props, type: "h3" })
export const LinkH4 = (props: Props) => LinkH({ ...props, type: "h4" })
export const LinkH5 = (props: Props) => LinkH({ ...props, type: "h5" })
export const LinkH6 = (props: Props) => LinkH({ ...props, type: "h6" })
