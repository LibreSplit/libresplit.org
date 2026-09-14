import type { ParentProps } from "solid-js";

import { AppDocsBackButton } from "../libresplit/AppDocsBackButton";

export function LayoutDocs(props: ParentProps) {
  return (
    <div>
      <AppDocsBackButton />
      {props.children}
    </div>
  );
}
