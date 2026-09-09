import { AppBackButton } from "@/components/libresplit/AppBackButton";
import { AppGitHubGenericMarkdown } from "@/components/libresplit/AppGitHubGenericMarkdown";

export function Troubleshooting() {
  return (
    <div>
      <AppBackButton />
      <AppGitHubGenericMarkdown url="https://raw.githubusercontent.com/LibreSplit/LibreSplit/refs/heads/main/docs/troubleshooting.md" />
    </div>
  );
}
