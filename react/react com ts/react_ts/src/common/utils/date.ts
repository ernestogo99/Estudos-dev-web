export const tempopara_segundo = (tempo: string) => {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");
  const horas_em_segundos = Number(horas) * 3600;
  const minutos_em_segundos = Number(minutos) * 60;
  return horas_em_segundos + minutos_em_segundos + Number(segundos);
};
