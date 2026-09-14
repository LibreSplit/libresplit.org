import { A } from "@solidjs/router";
import { ArrowLeft } from "lucide-solid";
import type { ParentProps } from "solid-js";

import { Button } from "../ui/button";

export function LayoutDocs(props: ParentProps) {
  return (
    <div>
      <Button variant="outline" as={A} href="/docs">
        <ArrowLeft />
        <p>Docs</p>
      </Button>
      {props.children}
    </div>
  );
}
