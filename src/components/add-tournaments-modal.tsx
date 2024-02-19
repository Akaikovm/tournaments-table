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
import { FormGroup, FormInline } from "./ui/modal/form-ui";
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
    <Modal isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <CloseButton onClick={onClose} />
          </div>
        </ModalHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 rounded-full">
                  <AiFillFileAdd size={20} />
                </div>
                <div className="mt-3 sm:mt-5">
                  <h3
                    className="text-lg text-center font-medium text-gray-900 leading-6"
                    id="modal-headline"
                  >
                    Añadir Torneo
                  </h3>
                </div>
              </div>
              <div className="space-y-6">
                <FormGroup className="block md:inline-block mt-4 w-full">
                  <Label htmlFor="platform">Plataforma</Label>
                  <div className="mr-3 mt-3">
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
                          error={errors.platform}
                        />
                      )}
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    type="text"
                    id="date"
                    className="w-full mr-3 mt-3"
                    {...register("date", { required: true })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="game">Juego</Label>
                  <Input
                    type="text"
                    id="game"
                    className="mr-3 mt-3 w-full"
                    {...register("game", { required: true })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="season">Season</Label>
                  <Input
                    type="number"
                    id="season"
                    className="mr-3 mt-3 w-full"
                    {...register("season", { required: true })}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="champion">Campeon</Label>
                  <FormInline className="flex-col md:flex-row gap-4">
                    <div className="md:w-full">
                      <Input
                        type="text"
                        id="champion"
                        className="mr-3 mt-3 w-full"
                        {...register("champion", { required: true })}
                      />
                    </div>
                    <div className="md:w-full -mt-5">
                      <Label htmlFor="championTeam">Equipo Campeon</Label>
                      <Input
                        type="text"
                        id="championTeam"
                        className="mr-3 mt-3 w-full"
                        {...register("championTeam", { required: true })}
                      />
                    </div>
                  </FormInline>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="runnerUp">SubCampeon</Label>
                  <FormInline className="flex-col md:flex-row gap-4">
                    <div className="md:w-full">
                      <Input
                        type="text"
                        id="runnerUp"
                        className="mr-3 mt-3 w-full"
                        {...register("runnerUp", { required: true })}
                      />
                    </div>
                    <div className="md:w-full -mt-5">
                      <Label htmlFor="runnerUpTeam">Equipo Subcampeon</Label>
                      <Input
                        type="text"
                        id="runnerUpTeam"
                        className="mr-3 mt-3 w-full"
                        {...register("runnerUpTeam", { required: true })}
                      />
                    </div>
                  </FormInline>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="players">Jugadores</Label>
                  <FormInline className="flex-col md:flex-row gap-4">
                    <div className="md:w-full">
                      <Input
                        type="number"
                        id="players"
                        className="mr-3 mt-3 w-full"
                        {...register("players", { required: true })}
                      />
                    </div>
                    <div className="md:w-full -mt-5">
                      <Label htmlFor="tier">Tier</Label>
                      <div className="w-50 mr-3 mt-3">
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
                              error={errors.tier}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </FormInline>
                </FormGroup>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:col-start-2">
                <Button
                  type="button"
                  variant="danger"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
              </span>

              <span className="flex w-full rounded-md shadow-sm sm:col-start-1">
                <Button
                  type="submit"
                  variant="primary"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  loading={isLoadingAddition}
                >
                  Añadir
                </Button>
              </span>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
