import { GoogleSpreadsheet } from "google-spreadsheet";

export const addScoreToGSheets = async (index) => {
  if (
    process.env.REACT_APP_GOOGLE_CLIENT_EMAIL &&
    process.env.REACT_APP_GOOGLE_PRIVATE_KEY &&
    process.env.REACT_APP_SPREADSHEET_ID
  ) {
    try {
      const doc = new GoogleSpreadsheet(process.env.REACT_APP_SPREADSHEET_ID);
      await doc.useServiceAccountAuth(
        {
          client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
          private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(
            /\\n/g,
            "\n"
          ),
        },
        (err) => {
          if (err) console.log(err);
          console.log("Working");
        }
      );
      // throw new Error("Erro");
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      console.log("Sheedsdt", sheet);
      await sheet.addRow({
        web_client: "kushdaga pwa",
        timestamp: Date.now(),
        spin_result_index: index,
      });
      window.location.reload();
    } catch (err) {
      console.log("Errror", err);
      fetch(process.env.REACT_APP_BACKEND_URI, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          index: index,
        }),
      }).then((res) => window.location.reload());
    }
  } else {
    alert("Env variables not set");
  }

  //   console.log(sheet);
};
