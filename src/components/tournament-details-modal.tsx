import React, { useContext } from "react";
import { AiTwotoneSnippets } from "react-icons/ai";
import { Button } from "./ui/button";
import {
  CloseButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./ui/modal/modal";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context/provider";
import { useDeleteAppointment } from "hooks/use-tournaments";

export interface TournamentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tournamentDetail: any;
}

export function TournamentDetailsModal(props: TournamentDetailsModalProps) {
  const { isOpen, onClose, tournamentDetail } = props;
  const [, setState] = useContext(AppContext);
  const deleteTournamentMutation = useDeleteAppointment();
  const { mutate: deleteTournament, isLoading: isLoadingDelete } =
    deleteTournamentMutation;

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/tournament-details`;
    navigate(path);
    setState(tournamentDetail);
  };

  const tournamentSelected = tournamentDetail?.selectedRows.map(
    (tournament: any) => {
      const id = tournament.id;
      return id;
    }
  );

  const tournamentID = tournamentSelected?.toString();

  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <CloseButton
              testId="close-log-cancelation-modal"
              onClick={onClose}
            />
          </div>
        </ModalHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            deleteTournament(
              {
                id: tournamentID,
              },
              {
                onSuccess: () => {
                  onClose();
                },
              }
            );
          }}
        >
          <ModalBody>
            <div>
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-100 rounded-full">
                <AiTwotoneSnippets size={20} />
              </div>
              <div className="mt-3 sm:mt-5">
                <h3
                  className="text-lg text-center font-medium text-gray-900 leading-6"
                  id="modal-headline"
                >
                  Detalles del Torneo
                </h3>
                <div className="mt-6">
                  <p className="text-center">
                    Aqui podras ver detalles del torneo seleccionado o
                    eliminarlo
                  </p>
                </div>
                <div className="mt-8">
                  {tournamentDetail?.selectedRows?.length ? (
                    <div>
                      {tournamentDetail.selectedRows.map((tournament: any) => {
                        return (
                          <div key={tournament.id}>
                            <ul>
                              <li>
                                <span>{`Fecha: ${tournament.date}`}</span>
                              </li>
                              <li>
                                <span>{`Juego: ${tournament.game}`}</span>
                              </li>
                              <li>
                                <span>{`Campeon: ${tournament.champion}`}</span>
                              </li>
                              <li>
                                <span>{`Tier: ${tournament.tier}`}</span>
                              </li>
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="mt-8">
                      <span className="text-sm font-semibold text-red-700">
                        No hay Detalles de Torneo
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:col-start-2">
                <Button
                  type="submit"
                  variant="danger"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  loading={isLoadingDelete}
                >
                  Eliminar
                </Button>
              </span>

              <span className="flex w-full rounded-md shadow-sm sm:col-start-1">
                <Button
                  type="button"
                  variant="primary"
                  className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={routeChange}
                >
                  Ver Detalles
                </Button>
              </span>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
