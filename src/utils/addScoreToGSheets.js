import { GoogleSpreadsheet } from "google-spreadsheet";

export const addScoreToGSheets = async (index) => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_SPREADSHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.addRow({
    web_client: "kushdaga pwa",
    timestamp: Date.now(),
    spin_result_index: index,
  });
  //   console.log(sheet);
};
