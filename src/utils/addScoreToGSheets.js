import { GoogleSpreadsheet } from "google-spreadsheet";

export const addScoreToGSheets = async (index) => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_SPREADSHEET_ID);
  console.log(doc);
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY,
  });
  console.log(doc);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  console.log(sheet);
  await sheet.addRow({
    web_client: "kushdaga pwa",
    timestamp: Date.now(),
    spin_result_index: index,
  });
  window.location.reload();
  //   console.log(sheet);
};
