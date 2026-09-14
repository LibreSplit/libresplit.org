import { A } from "@solidjs/router";
import { ArrowLeft } from "lucide-solid";
import type { ParentProps } from "solid-js";

import { buttonVariants } from "../ui/button";

export function LayoutDocs(props: ParentProps) {
  return (
    <div>
      <nav class="mb-6">
        <A
          href="/docs"
          class={buttonVariants({
            variant: "ghost",
            size: "sm",
            class: "-ml-2 text-muted-foreground hover:text-foreground",
          })}
        >
          <ArrowLeft />
          <p>Docs</p>
        </A>
      </nav>

      {props.children}
    </div>
  );
}
