import { useNavigate } from "@solidjs/router";
import { ArrowLeft } from "lucide-solid";

import { Button } from "../ui/button";

export function AppBackButton() {
  const navigate = useNavigate();

  return (
    <Button variant="outline" onClick={() => navigate(-1)}>
      <ArrowLeft />
      <p>Back</p>
    </Button>
  );
}
