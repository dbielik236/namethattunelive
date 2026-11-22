# Gus & Jean — Name That Tune (first working build)

This is a browser-based MVP with three pages:
- `team.html` — team sign-up and song-by-song answer locking
- `host.html` — host login, game creation, scoring and round controls
- `display.html` — separate, read-only leaderboard display

## Before it can run

This app uses Firebase so multiple phones, the host laptop and a separate TV/device share live data. The source files are ready, but you must connect your own Firebase project.

### 1. Create Firebase project
1. Go to https://console.firebase.google.com/ and create a project.
2. Add a Web App.
3. Copy the Firebase web configuration into `firebase-config.js`.
4. In **Build → Firestore Database**, create a database (production mode is fine).
5. In **Build → Authentication → Sign-in method**, enable **Email/Password** and **Anonymous**.
6. In Authentication, create the host email/password account.
7. In `firestore.rules`, replace `YOUR_HOST_EMAIL` with that exact host email.
8. Publish the Firestore rules.

### 2. Deploy the website
You can host these files on GitHub Pages, Netlify, or Firebase Hosting. Keep all files in the same directory. For a public event, use HTTPS hosting (not opening the HTML file directly).

### 3. Run a game
1. Open `host.html` and sign in.
2. Create a game. It generates a short game code.
3. Share the team link or QR-code the URL:
   `https://YOUR-SITE/team.html?game=GAMECODE`
4. Open the display link on the TV/projector device:
   `https://YOUR-SITE/display.html?game=GAMECODE`
5. Teams enter a name and join. Start the game from the host panel.
6. For each song, teams enter title and artist and lock their answer. The host awards title and artist points separately.
7. End the round, reveal the leaderboard, and start the next round.

## Scoring model
- 1 point for the song title.
- 1 point for the artist.
- Scores are added immediately when the host clicks a scoring button.
- Team leaderboard shows cumulative score and current-round score.
- Host controls leaderboard visibility.

## Important MVP notes
- This is a first mechanics build, not yet the final event-ready release.
- The current team page supports one team per browser/device. Teams should use one phone per team.
- Answer locking is enforced by creating a single answer record per team/song; teams cannot edit an already-created answer from the team interface.
- Host scoring buttons are individually disabled after that answer part is scored.
- The first build polls the host submissions every 2.5 seconds. A later refinement can make that panel fully event-driven.
- Add a QR-code generator, editable round/song labels, answer correction/reopen controls, stronger host administration, and confetti/leaderboard animations in the next iteration.
- For production use, test the Firestore rules and the full event flow with several devices before using it at a paid event.
# namethattunelive
