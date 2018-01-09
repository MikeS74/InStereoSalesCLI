# InStereo Quarterly Accounting CLI

Node CLI that lets the user search through a SQL database of quarterly sales reports from Beatport and Traxsource and display total sales for particular artists.

#### Search and displays specs for each CSV file:
### TRAXSOURCE CSV
Search:<br>
"Track Artist"<br>
-OR-<br>
"Track Version" (a.k.a. Remixer Name) (Exclude: "Original", "Mix", "Remix", "Club" "Edit")

Display:<br>
"Track Artist" (Multiple Artist names are ok)<br> 
`+` "Track Title" (Exclude repeats)<br>
-OR-<br>
"Track Title" (Exclude repeats)<br>
`+` "Track Version"<br>

-BOTH COMBINED WITH-<br>

"Qty" (Sum for each specific track)<br>
`+` "Amount Due" (Sum for each track, decimal - toFixed(2))

### BEATPORT CSV
Search:<br>
"TRACK_ARTIST"<br>
-OR-<br>
"REMIXER_NAME"

Display:<br>
"TRACK_ARTIST" (Multiple Artist names are ok)<br>
`+` "TRACK_TITLE" (Exclude repeats)<br>
-OR-<br>
"TRACK_TITLE" (Exclude repeats)<br>
`+` "REMIXER_NAME" (Multiple Artist names are ok)<br>

-BOTH COMBINED WITH-<br>

"TRACK_COUNT" (Sum for each specific track)<br>
`+` "NET_CONTENT_REVENUE" (Sum for each track, decimal - toFixed(2))<br>
