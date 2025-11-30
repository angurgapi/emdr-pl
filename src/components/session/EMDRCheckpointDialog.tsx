"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "emdr-checkpoint-dialog-dismissed";

export function EMDRCheckpointDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const handleDontShowAgain = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] rounded-md">
        <DialogHeader>
          <DialogTitle>Zanim zaczniesz</DialogTitle>
          <DialogDescription>
            Ważne informacje dotyczące samodzielnej stymulacji obustronnej
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">✓ Zadbaj o wygodę</h4>
            <p className="text-sm text-muted-foreground">
              Znajdź ciche, wygodne miejsce, gdzie nikt Cię nie będzie
              przeszkadzał. Usiądź lub połóż się w zrelaksowanej pozycji.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">✓ Bezpieczeństwo przede wszystkim</h4>
            <p className="text-sm text-muted-foreground">
              To narzędzie nie zastępuje profesjonalnej terapii. Jeśli zmagasz
              się z traumą, silnym lękiem lub innymi problemami ze zdrowiem
              psychicznym, skonsultuj się z licencjonowanym terapeutą
              przeszkolonym w EMDR lub innych terapiach opartych na dowodach
              naukowych.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">✓ Słuchaj swojego ciała</h4>
            <p className="text-sm text-muted-foreground">
              Jeśli podczas sesji odczujesz dyskomfort, stres lub przytłaczające
              emocje, natychmiast przerwij i rozważ kontakt ze specjalistą ds.
              zdrowia psychicznego.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">✓ Nie spiesz się</h4>
            <p className="text-sm text-muted-foreground">
              Nie ma pośpiechu. Użyj ustawień długości sesji, aby znaleźć to, co
              dla Ciebie najlepsze. Możesz wstrzymać lub zatrzymać w każdej
              chwili.
            </p>
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            onClick={handleDontShowAgain}
            className="w-full sm:w-auto"
          >
            Nie pokazuj ponownie
          </Button>
          <Button onClick={handleClose} className="w-full sm:w-auto">
            Rozumiem, zacznijmy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
