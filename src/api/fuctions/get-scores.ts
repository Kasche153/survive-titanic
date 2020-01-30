import { api } from "api/api";

export const getScores = async () => {
  const query = `query{
        getScores(first:100, offset:0){
          username
          score
          date
        }
      }`;
  const res: any = await api.makeQuery(query);
  return res.getScores;
};

export const addScore = async (username: string, score: number) => {
  const mutation = `mutation {
    addScore(score:{
      username:"${username}",
      score:${score}
    })
  }
  `;

  const res: any = await api.makeMutation(mutation);
  return res.addScore;
};
