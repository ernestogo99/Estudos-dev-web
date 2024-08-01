import { Api } from "../apiconfig";

import { ApiErrorexception } from "../errorexception";

export interface Itarefa {
  id: string;
  title: string;
  estacompleta: boolean;
}

const getAll = async (): Promise<Itarefa[] | ApiErrorexception> => {
  try {
    const { data } = await Api().get("/tarefas");
    return data;
  } catch (error: any) {
    return new ApiErrorexception(
      error.message || "erro ao buscar os registros"
    );
  }
};

const getByid = async (id: string): Promise<Itarefa | ApiErrorexception> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiErrorexception(error.message || "erro ao consultar a api");
  }
};

const create = async (
  datacreate: Omit<Itarefa, "id">
): Promise<Itarefa | ApiErrorexception> => {
  try {
    const { data } = await Api().post("/tarefas", datacreate);
    return data;
  } catch (error: any) {
    return new ApiErrorexception(error.message || "erro ao criar o registro");
  }
};

const updateByid = async (
  id: string,
  dataToupdate: Itarefa
): Promise<Itarefa | ApiErrorexception> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataToupdate);
    return data;
  } catch (error: any) {
    return new ApiErrorexception(
      error.message || "erro ao atualizar o registro"
    );
  }
};

const deleteByid = async (id: string): Promise<any> => {
  try {
    await Api().delete(`/tarefas/${id}`);
  } catch (error: any) {
    return new ApiErrorexception(error.message || "erro ao deletar o registro");
  }
};

export const Tarefaservice = {
  getAll,
  getByid,
  create,
  updateByid,
  deleteByid,
};
