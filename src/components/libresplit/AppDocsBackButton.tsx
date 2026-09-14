import { useNavigate } from "@solidjs/router";
import { ArrowLeft } from "lucide-solid";

import { Button } from "../ui/button";

export function AppDocsBackButton() {
  const navigate = useNavigate();

  return (
    <Button variant="outline" onClick={() => navigate(-1)}>
      <ArrowLeft />
      <p>Docs</p>
    </Button>
  );
}
