"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  AudioSound,
  BallDirection,
  SessionDuration,
  useSessionSettings,
} from "@/store/sessionSettings";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  MoveDiagonal,
  MoveDiagonal2,
  MoveHorizontal,
  MoveVertical,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function SettingsSidebar() {
  const {
    ballColor,
    setBallColor,
    ballSpeed,
    setBallSpeed,
    bgColor,
    setBgColor,
    setBallSize,
    ballSize,
    ballDirection,
    setBallDirection,
    isSoundOn,
    setSoundOn,
    audioSound,
    setAudioSound,
    sessionDuration,
    setSessionDuration,
  } = useSessionSettings();

  const sizemap: Record<string, number> = { s: 16, m: 24, l: 32, xl: 42 };
  const directionOptions = [
    {
      value: "leftToRight",
      icon: <MoveHorizontal />,
    },
    {
      value: "topToBottom",
      icon: <MoveVertical />,
    },
    {
      value: "diagLeftToRight",
      icon: <MoveDiagonal2 />,
    },
    {
      value: "diagRightToLeft",
      icon: <MoveDiagonal />,
    },
  ];
  const durationOptions = [
    { value: "infinite", label: "∞" },
    {
      value: "5m",
      label: "5 min",
    },
    { value: "20m", label: "20 min" },
    { value: "1h", label: "1 g" },
  ];
  // useEffect(() => {
  //   setBallSize(sizemap["m"]);
  // }, [setBallSize]);
  const soundOptions = [
    {
      label: "Pstryk",
      value: "snap",
    },
    { label: "Bicie serca", value: "heartbeat" },
    { label: "Pik", value: "beep" },
  ];
  return (
    <Sidebar className="z-50 min-h-[200px]">
      <SidebarContent className="pt-1">
        <SidebarHeader className="font-bold">Preferencje</SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <div>
              <span className="mb-2 block font-semibold">Kolory</span>
              <div className="flex gap-2">
                <div className="flex w-full flex-col gap-2">
                  <span>Kula</span>
                  <Input
                    type="color"
                    value={ballColor}
                    onChange={(e) => setBallColor(e.target.value)}
                  />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <span>Tło</span>
                  <Input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <span className="font-semibold">Prędkość</span>
              <div className="flex gap-2 items-center">
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <Button
                    size="sm"
                    key={speed}
                    onClick={() => setBallSpeed(speed)}
                    variant={ballSpeed === speed ? "default" : "outline"}
                  >
                    {speed}x
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-semibold">Rozmiar</span>
              <div className="flex gap-2 items-center">
                {["s", "m", "l", "xl"].map((size) => (
                  <Button
                    size="sm"
                    variant={sizemap[size] === ballSize ? "default" : "outline"}
                    key={size}
                    onClick={() => setBallSize(sizemap[size])}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="font-semibold">Kierunek</span>
              <div className="flex gap-2 items-center">
                {directionOptions.map((option) => (
                  <Button
                    size="sm"
                    variant={
                      ballDirection === option.value ? "default" : "outline"
                    }
                    key={option.value}
                    onClick={() =>
                      setBallDirection(option.value as BallDirection)
                    }
                  >
                    {option.icon}
                  </Button>
                ))}
              </div>

              {ballDirection === "leftToRight" && (
                <>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="font-semibold">Dźwięk</span>
                    <Switch checked={isSoundOn} onCheckedChange={setSoundOn} />
                  </div>
                  {isSoundOn && (
                    <div className="flex flex-col gap-2 mt-4">
                      <span className="font-semibold">Rodzaj dźwięku</span>
                      <div className="flex gap-2 items-center">
                        {soundOptions.map((sound) => (
                          <Button
                            size="sm"
                            variant={
                              sound.value === audioSound ? "default" : "outline"
                            }
                            key={sound.value}
                            onClick={() =>
                              setAudioSound(sound.value as AudioSound)
                            }
                          >
                            {sound.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
              <div className="flex flex-col gap-2 mt-4">
                <span className="font-semibold">Długość sesji</span>
                <div className="flex gap-2 items-center">
                  {durationOptions.map((option) => (
                    <Button
                      size="sm"
                      key={option.value}
                      variant={
                        sessionDuration === option.value ? "default" : "outline"
                      }
                      onClick={() => {
                        setSessionDuration(option.value as SessionDuration);
                      }}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
