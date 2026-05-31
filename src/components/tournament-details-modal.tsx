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
import { useDeleteTournament } from "hooks/use-tournaments";

export interface TournamentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tournamentDetail: any;
}

export function TournamentDetailsModal(props: TournamentDetailsModalProps) {
  const { isOpen, onClose, tournamentDetail } = props;
  const [, setState] = useContext(AppContext);
  const deleteTournamentMutation = useDeleteTournament();
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient shadow-[0_8px_24px_rgba(245,158,11,0.45)]">
                <AiTwotoneSnippets size={20} className="text-white" />
              </div>
              <div>
                <h3
                  className="text-lg sm:text-xl font-display font-bold text-white"
                  id="modal-headline"
                >
                  Detalles del Torneo
                </h3>
                <p className="text-xs text-white/50">
                  Visualiza o elimina el torneo seleccionado
                </p>
              </div>
            </div>
            <CloseButton onClick={onClose} />
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
          <ModalBody className="mt-6">
            {tournamentDetail?.selectedRows?.length ? (
              <div className="space-y-3">
                {tournamentDetail.selectedRows.map((tournament: any) => (
                  <div
                    key={tournament.id}
                    className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-display font-semibold text-white">
                        {tournament.game}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-brand-500/15 border border-brand-400/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-brand-200 font-semibold">
                        Tier {tournament.tier}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-white/40">
                          Fecha
                        </div>
                        <div className="text-white/85">{tournament.date}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-white/40">
                          Campeon
                        </div>
                        <div className="text-white/85">
                          {tournament.champion}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-6 text-center">
                <div className="text-sm text-white/60">
                  Selecciona un torneo para ver sus detalles
                </div>
              </div>
            )}
          </ModalBody>
          <ModalFooter>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <Button
                type="submit"
                variant="danger"
                fullWidth
                loading={isLoadingDelete}
                className="sm:w-auto"
              >
                Eliminar
              </Button>
              <Button
                type="button"
                variant="primary"
                fullWidth
                onClick={routeChange}
                className="sm:w-auto"
              >
                Ver Detalles
              </Button>
            </div>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
