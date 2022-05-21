import { ThunkAction } from "redux-thunk";
import { API } from "../api/api";
import { AppStateType, InferActionTypes } from "./redux-store";

type ActionType = InferActionTypes<typeof actions>;

export const actions = {
  saveCurrency: (currency: {}) =>
    ({ type: "SAVE_CURRENCY", currency } as const),
  updateDate: (date: string, timestamp: string) =>
    ({ type: "SAVE_DATE", date, timestamp } as const),
};

export type convertedAmount = {
  id: number;
  name: string;
  description: string;
  img: string;
};

let initialState = {
  convertedAmounts: [
    {
      id: 1,
      name: "USD",
      description: "Доллар США",
      img: "http://4.bp.blogspot.com/-PSVm0SVC2bE/UeldWXVm55I/AAAAAAAAAJQ/FmSPaoHTbw8/s320/images.jpg",
    },
    {
      id: 2,
      name: "EUR",
      description: "Евро",
      img: "https://www.bosunbobs.com/Images/Models/Full/110.Jpg",
    },
    {
      id: 3,
      name: "JPY",
      description: "Японская иена",
      img: "https://hpc2017.org/wp-content/uploads/2016/04/Heat-Pump-Flag-Japan-1.png",
    },
    {
      id: 4,
      name: "GBP",
      description: "Фунт стерлингов",
      img: "https://media2.autokopen.nl/afbeeldingen/britse-vlag-90490-240.jpg",
    },
    {
      id: 5,
      name: "CHF",
      description: "Швейцарский франк",
      img: "https://i2.wp.com/gwam.ch/wp-content/uploads/2017/04/1.jpg?resize=300%2C169&ssl=1",
    },
    {
      id: 6,
      name: "RUB",
      description: "Российский рубль",
      img: "https://egor.mp-mp.ru/upload/sync/png/2/d/0/2d04a34a6e938d598ad3643428020c20.png",
    },
    {
      id: 7,
      name: "CAD",
      description: "Канадский доллар",
      img: "https://www.cardly.net/images/flags/ca.png",
    },
    {
      id: 8,
      name: "CZK",
      description: "Чешский крон",
      img: "https://sun9-79.userapi.com/impf/c841623/v841623600/197e7/_3SnPzJPWLA.jpg?size=130x97&quality=96&sign=b15df84352f03de0628b7da7fd77092a&c_uniq_tag=U8N3mkSfUp2oNyMyq2GqzOqs4blnmZPzPetcYd-pwxc&type=album",
    },
    {
      id: 9,
      name: "PLN",
      description: "Польский злотый",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Thuringia.svg/250px-Flag_of_Thuringia.svg.png",
    },
    {
      id: 10,
      name: "SEK",
      description: "Шведская крона",
      img: "https://www.consciencelaws.org/images/flagsweden.jpg",
    },
  ] as Array<convertedAmount>,
  currencyData: {} as any,
  updateDate: "" as string,
  timeStamp: "" as string,
};

type InitialStateType = typeof initialState;

let convertedreducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "SAVE_CURRENCY":
      return {
        ...state,
        currencyData: action.currency,
      };
    case "SAVE_DATE":
      return {
        ...state,
        updateDate: action.date,
        timeStamp: action.timestamp,
      };
    default:
      return state;
  }
};

export const getConvertedAmount =
  (): ThunkAction<Promise<void>, AppStateType, unknown, ActionType> =>
  async (dispatch) => {
    let data = await API.getAmount();
    if (
      !data.error &&
      !data.code &&
      !data.explanation &&
      typeof data === "object"
    ) {
      dispatch(actions.saveCurrency(data.Valute));
      dispatch(
        actions.updateDate(
          data.Date.substring(0, 16).replace("T", " "),
          data.Timestamp.substring(0, 16).replace("T", " ")
        )
      );
    }
  };

export default convertedreducer;
