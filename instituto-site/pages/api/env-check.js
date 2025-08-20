// pages/api/env-check.js (opcional)
export default function handler(req,res){
  res.status(200).json({
    SHEETS_SPREADSHEET_ID: !!process.env.SHEETS_SPREADSHEET_ID,
    GOOGLE_SERVICE_ACCOUNT_EMAIL: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    GOOGLE_PRIVATE_KEY: !!process.env.GOOGLE_PRIVATE_KEY || !!process.env.GOOGLE_PRIVATE_KEY_BASE64,
  });
}