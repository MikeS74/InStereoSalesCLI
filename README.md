# InStereo Quurterly Accounting CLI

## Node CLI that lets the user search through a SQL database of quarterly sales reports from Beatport and Traxsource and display total sales for particular artists.

#### Search and displays specs for each CSV file

TRAXSOURCE CSV
*Search:
"Track Artist"
-OR-
"Track Version" (a.k.a. Remixer Name) (Exclude: "Original", "Mix", "Remix", "Club" "Edit")

*Display:
"Track Artist" (Multiple Artist names are ok) 
+ "Track Title" (Exclude repeats)
-OR-
"Track Title" (Exclude repeats)
+ "Track Version" (Exclude: "Original", "Mix", "Remix", "Club" "Edit")
-COMBINED WITH-
+ "Qty" (Sum for each specific track)
+ "Amount Due" (Sum for each track, decimal - toFixed(2))

BEATPORT CSV
*Search:
"TRACK_ARTIST"
-OR-
"REMIXER_NAME"

*Display:
"TRACK_ARTIST" (Multiple Artist names are ok)
+ "TRACK_TITLE" (Exclude repeats)
-OR-
"TRACK_TITLE" (Exclude repeats)
+ "REMIXER_NAME" (Multiple Artist names are ok)
-COMBINED WITH-
+ "TRACK_COUNT" (Sum for each specific track)
+ "NET_CONTENT_REVENUE" (Sum for each track, decimal - toFixed(2))
