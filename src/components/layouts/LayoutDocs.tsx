import { A } from "@solidjs/router";
import { ArrowLeft } from "lucide-solid";
import type { ParentProps } from "solid-js";

import { Button } from "../ui/button";

export function LayoutDocs(props: ParentProps) {
  return (
    <div>
      <nav class="mb-6">
        <Button
          variant="ghost"
          size="sm"
          class="-ml-2 text-muted-foreground hover:text-foreground"
          as={A}
          href="/docs"
        >
          <ArrowLeft />
          <p>Docs</p>
        </Button>
      </nav>

      {props.children}
    </div>
  );
}
