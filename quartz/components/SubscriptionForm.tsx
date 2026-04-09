import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function SubscriptionForm({ displayClass }: QuartzComponentProps) {
  return <div class={classNames(displayClass, "spacer")}>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/home.jasonly.dev"
        method="post"
        class="embeddable-buttondown-form"
      >
        <label for="bd-email">Like what I write? Give me your email, and I'll update you when I write more.</label><p/>
        <input type="email" name="email" id="bd-email" />
        <input type="submit" value="Subscribe" />
        <p>
          Or <a href="https://ko-fi.com/jasonlydev" target="_blank">shout me a coffee.</a>
        </p>

      </form>
    </div>
  }

export default (() => SubscriptionForm) satisfies QuartzComponentConstructor
