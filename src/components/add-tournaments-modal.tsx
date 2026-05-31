import React, { useEffect } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  CloseButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./ui/modal/modal";
import { Label } from "./ui/label";
import { Controller, useForm, useWatch } from "react-hook-form";
import { Input } from "./ui/input";
import { Select } from "./ui/modal/select";
import { useAddTournament } from "hooks/use-tournaments";

export interface TournamentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const platformOptions = [
  { value: "Emulador", label: "Emulador" },
  { value: "IRL", label: "IRL" },
  { value: "PC ", label: "PC" },
  { value: "Playstation 5", label: "Playstation 5" },
  { value: "Playstation 4", label: "Playstation 4" },
  { value: "Nintendo Switch", label: "Nintendo Switch" },
];

const tierOptions = [
  { value: "IRL", label: "IRL" },
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
];

export function AddTournamentsModal(props: TournamentDetailsModalProps) {
  const addTournamentMutation = useAddTournament();
  const { mutate: addTournament, isLoading: isLoadingAddition } =
    addTournamentMutation;
  const { isOpen, onClose } = props;
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const watchPlatform = useWatch({
    control,
    name: "platform",
  });
  const watchDate = watch("date");
  const watchGame = watch("game");
  const watchSeason = watch("season");
  const watchChampion = watch("champion");
  const watchChampionTeam = watch("championTeam");
  const watchRunnerUp = watch("runnerUp");
  const watchRunnerUpTeam = watch("runnerUpTeam");
  const watchPlayers = watch("players");
  const watchTier = useWatch({
    control,
    name: "tier",
  });

  const onSubmit = () => {
    addTournament(
      {
        champion: watchChampion,
        championTeam: watchChampionTeam,
        date: watchDate,
        game: watchGame,
        platform: watchPlatform.value,
        players: parseInt(watchPlayers, 10),
        runnerUp: watchRunnerUp,
        runnerUpTeam: watchRunnerUpTeam,
        season: parseInt(watchSeason, 10),
        tier: watchTier.value,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient shadow-[0_8px_24px_rgba(245,158,11,0.45)]">
                <AiFillFileAdd size={20} className="text-white" />
              </div>
              <div>
                <h3
                  className="text-lg sm:text-xl font-display font-bold text-white"
                  id="modal-headline"
                >
                  Añadir Torneo
                </h3>
                <p className="text-xs text-white/50">
                  Registra un nuevo torneo en la serie
                </p>
              </div>
            </div>
            <CloseButton onClick={onClose} />
          </div>
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody className="mt-6 space-y-5">
            <div>
              <Label htmlFor="platform">Plataforma</Label>
              <Controller
                name="platform"
                control={control}
                render={({ field }) => (
                  <Select
                    disabled={false}
                    {...field}
                    id="platform"
                    options={platformOptions}
                    isSearchable
                    placeholder="Selecciona plataforma..."
                    error={errors.platform}
                  />
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">Fecha</Label>
                <Input
                  type="text"
                  id="date"
                  placeholder="DD/MM/YYYY"
                  {...register("date", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="season">Season</Label>
                <Input
                  type="number"
                  id="season"
                  placeholder="2024"
                  {...register("season", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="game">Juego</Label>
              <Input
                type="text"
                id="game"
                placeholder="Ej: FIFA, NBA 2K..."
                {...register("game", { required: true })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="champion">Campeon</Label>
                <Input
                  type="text"
                  id="champion"
                  placeholder="Nombre del campeon"
                  {...register("champion", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="championTeam">Equipo Campeon</Label>
                <Input
                  type="text"
                  id="championTeam"
                  placeholder="Equipo"
                  {...register("championTeam", { required: true })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="runnerUp">Subcampeon</Label>
                <Input
                  type="text"
                  id="runnerUp"
                  placeholder="Nombre del subcampeon"
                  {...register("runnerUp", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="runnerUpTeam">Equipo Subcampeon</Label>
                <Input
                  type="text"
                  id="runnerUpTeam"
                  placeholder="Equipo"
                  {...register("runnerUpTeam", { required: true })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="players">Jugadores</Label>
                <Input
                  type="number"
                  id="players"
                  placeholder="Cantidad"
                  {...register("players", { required: true })}
                />
              </div>
              <div>
                <Label htmlFor="tier">Tier</Label>
                <Controller
                  name="tier"
                  control={control}
                  render={({ field }) => (
                    <Select
                      disabled={false}
                      {...field}
                      id="tier"
                      options={tierOptions}
                      isSearchable
                      placeholder="Selecciona tier..."
                      error={errors.tier}
                    />
                  )}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <Button
                type="button"
                variant="secondary"
                fullWidth
                onClick={onClose}
                className="sm:w-auto"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={isLoadingAddition}
                className="sm:w-auto"
              >
                Añadir Torneo
              </Button>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
