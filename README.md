# UE | Attendify (EAST-Y CHECK)

A QR-based classroom attendance system. Teachers create classes and show a QR code;
students log in through it and are marked **Present** or **Late** automatically.
Attendance is synced live through Firebase and archived to MongoDB for reporting.

## Folder layout
```
backend/    Node.js + Express API (server.js, mongoHandler.js), package.json, .env
frontend/   Active web pages (open in a browser / host statically). Kept flat so page links work.
  js/       student_attendance.js (standalone student view logic)
data/       Sample class-list CSVs used for import
docs/demo/  Screen recording of the system
archive/    Older page variants, duplicates and unused files (kept, not deleted)
```

## Run the backend
```bash
cd backend
cp .env.example .env          # then fill in your own values
# place your Firebase service account key at backend/firebase-service-account.json
npm install
node server.js                # http://localhost:5000
```

## Pages
| Page | Role | Purpose |
|---|---|---|
| index.html | All | Login (IDs starting with `T` = teacher) |
| quick signup.html | Admin | Create/import student accounts |
| classes selection.html | Teacher | Create classes, import CSV class lists |
| attendance section.html | Teacher | QR code, live attendance, reset/save/export |
| secretary.html + SecAtt.html | Secretary | Manage classes, manually edit statuses |
| summary.html | Teacher | Per-class attendance report, Excel export |
| Classes student.html | Student | View own attendance per class |
| homepage / homepagestudent / Main | — | Dashboard shells & navigation |

## Known issues (see chat notes)
- `./css/` and `./js/classes.js` and `ue-logo.png` referenced by pages are missing from the upload.
- Secrets were found in plain text (`.env`, service account, `scripts/testmongo.js`) — rotate them.
