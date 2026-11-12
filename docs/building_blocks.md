# Building Blocks: Updating the Website Yourself

This guide shows you how to make two common updates to the CCC website **using only your web browser** (no VS Code, no installs):

1. [Update the Partners on the "Who We Are" page](#part-1-update-partners-on-the-who-we-are-page)
2. [Add a new tile / document to Reports on the "Resources" page](#part-2-add-a-new-tile--document-to-reports-on-the-resources-page)

You do not need to know how to code. Every step says exactly where to click and exactly what to copy and paste. Wherever you see text in **ALL CAPITAL LETTERS** inside a code block, that is a placeholder: replace it with your own information (and delete the capital letters).

---

## Before you start (one-time checklist)

- You need a free **GitHub account** that has been given **write access** to the project. The repository owner must add you as a collaborator. If you ever see a message like _"You need to fork this repository to propose changes"_, **stop**: it means you don't have write access yet. Ask the developer to add you.
- The project lives here: **https://github.com/cssgunc/ccc**
- When you save a change (called a **commit**) to the `main` branch, the live website rebuilds itself automatically. This usually takes **1 to 3 minutes**. If a change has a mistake that prevents the site from building, the previous version of the site stays online, so you cannot "take the website down" by making a typo.

### Words used in this guide

| Word              | What it means                                                                   |
| ----------------- | ------------------------------------------------------------------------------- |
| **Repository**    | The project folder stored on GitHub.                                            |
| **Commit**        | Saving your changes. (GitHub's save button is called "Commit changes".)         |
| **`main` branch** | The official version of the project. Saving to `main` updates the live website. |
| **Placeholder**   | Capital-letter text in a code block that you replace with your own words.       |

### Rules for copy-pasting code (read this, it prevents most mistakes)

1. **Paste, don't type.** The GitHub editor sometimes auto-adds closing quotes/brackets when you _type_, which can create duplicates. Pasting does not do this.
2. **Never delete or change anything that isn't a placeholder.** The punctuation matters: `< > / " " { } ( )` must all stay exactly as written.
3. **Keep the quote marks.** When you replace a placeholder that sits between quote marks (`"` `"`), keep the quote marks and only replace the words inside them.
4. **Do not type a straight double quote (`"`) inside your own text.** It ends the text early and breaks the page. If you need quotation marks in a description, use curly quotes (“ ”) or single quotes (' ').
5. **Spacing and indentation do not matter** to the website. Don't worry if your pasted code isn't perfectly lined up.

---

## How to edit any file in the GitHub editor (used in both parts)

You will repeat these same steps for each file you edit.

1. Go to **https://github.com/cssgunc/ccc** and sign in.
2. Make sure the branch selector (a button near the top left of the file list, with a branch icon) says **`main`**.
3. Click the folder names to navigate to the file (the exact path is given in each part below).
4. Once you are looking at the file, click the **pencil icon** (✏️, labeled "Edit this file") near the top right of the file's contents.
5. The file opens in an editor. To jump to a specific spot, **click once inside the text**, then press **`Ctrl + F`** (Windows) or **`Cmd + F`** (Mac). A small search box appears. Type the text it tells you to look for and press Enter.
6. Make your change (instructions are in each part below).
7. Click the green **"Commit changes..."** button at the top right.
8. A box pops up:
    - **Commit message:** type a short description of what you did, for example `Add new partner to Who We Are page`.
    - Select **"Commit directly to the `main` branch"**.
    - Click the green **"Commit changes"** button.
9. Wait 1 to 3 minutes, then visit the website and do a hard refresh (`Ctrl + Shift + R` on Windows, `Cmd + Shift + R` on Mac) to see your change.

> **How to know if it worked:** on the repository's main page, next to the newest commit you'll often see a small symbol: a **yellow dot** means "still building", a **green check** means "live", and a **red X** means "the build failed". If you see a red X, see [Troubleshooting](#troubleshooting).

---

# Part 1: Update Partners on the "Who We Are" page

**File to edit:** `app/routes/people.tsx`
(Click `app` → `routes` → `people.tsx`. Direct link: https://github.com/cssgunc/ccc/blob/main/app/routes/people.tsx)

## How the Partners section is organized

The partners appear under the heading **"Coalition Partners"** in four boxes, each with its own heading in the file. To find them, press `Ctrl + F` and search for the heading text:

| Box on the website  | Search for this text in the file | Color     |
| ------------------- | -------------------------------- | --------- |
| UNC-Chapel Hill     | `UNC-Chapel Hill`                | Blue      |
| Town of Chapel Hill | `Town of Chapel Hill`            | Green     |
| Orange County       | `Orange County`                  | Yellow    |
| Additional Partners | `Additonal Partners`             | Dark blue |

> The heading is spelled `Additonal Partners` (missing an "i") in the file. Search for it exactly like that, or search for `AdditionalPartnersLogo` instead.
> The search for `Orange County` and `Town of Chapel Hill` will find several spots; use the one that sits right above a heading in this form: `<h1 style={{ fontSize: "32px", color: ...`.

Underneath each heading, partner names are arranged in **three columns**. In the file, each column is one block that starts with `<div>` and ends with `</div>`. Each partner name inside a column is one line item. It looks like this (Orange County shown as the example):

```
<div className={styles.grid}>
    <div>                                              ← COLUMN 1 starts
        <p className={styles.itemSize}>
            Health Department
        </p>
        <p className={styles.itemSize}>
            Criminal Justic Resource Department
        </p>
    </div>                                             ← COLUMN 1 ends

    <div>                                              ← COLUMN 2 starts
        <p className={styles.itemSize}>
            Emergency Services
        </p>
    </div>                                             ← COLUMN 2 ends

    <div>                                              ← COLUMN 3 starts
        <p className={styles.itemSize}>
            Sheriff's Office
        </p>
    </div>                                             ← COLUMN 3 ends
</div>
```

**One partner = one `<p className={styles.itemSize}> ... </p>` block.** Adding a partner means pasting a new one of these blocks into one of the three columns.

> **Exception, the first UNC-Chapel Hill column:** its first column has a bold heading ("Student Success") followed by a **bulleted list**. Partners in that list are written as `<li> ... </li>` instead of `<p className={styles.itemSize}> ... </p>`. If you are adding something that belongs under Student Success, see [1D](#1d-add-a-partner-under-student-success-unc-only). Otherwise use the other two columns of the UNC box, which work like every other box.

---

## 1A. Add a new partner WITH a link to their website

1. Open `app/routes/people.tsx` in the editor (see [How to edit any file](#how-to-edit-any-file-in-the-github-editor-used-in-both-parts)).
2. Use `Ctrl + F` to find the box you want (see the table above) and scroll down to its three columns.
3. Pick a column (usually the one with the fewest names, so the box stays balanced).
4. Find the **last** partner in that column. It ends with `</p>`. The very next line is `</div>`, which closes the column.
5. Click at the end of that last `</p>` and press Enter to start a new line. **Paste this:**

```
<p className={styles.itemSize}>
    <PartnerLink href="WEBSITE ADDRESS">
        PARTNER NAME
    </PartnerLink>
</p>
```

6. Replace the two placeholders:

| Placeholder       | What to put                                                                                                                           | Example                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `WEBSITE ADDRESS` | The full web address, **including `https://` at the start**. Copy it from your browser's address bar. Keep the quote marks around it. | `https://www.example.org/`       |
| `PARTNER NAME`    | The name exactly as you want it to appear on the page.                                                                                | `Example Community Organization` |

7. Commit your changes (steps 7 to 9 of [How to edit any file](#how-to-edit-any-file-in-the-github-editor-used-in-both-parts)).

**Finished example** (adding a partner to the Orange County box, column 2):

```
<div>
    <p className={styles.itemSize}>
        Emergency Services
    </p>
    <p className={styles.itemSize}>
        <PartnerLink href="https://www.example.org/">
            Example Community Organization
        </PartnerLink>
    </p>
</div>
```

> `PartnerLink` is already set up in the file; you don't need to add anything else. It automatically makes the link open in a new tab and show it as blue and underlined when someone hovers over it.

---

## 1B. Add a new partner WITHOUT a link

Follow the exact same steps as 1A, but paste this instead:

```
<p className={styles.itemSize}>
    PARTNER NAME
</p>
```

Replace `PARTNER NAME` with the name. There is no website address to fill in.

---

## 1C. Add a link to a partner who is already on the page

1. Find the partner's name in the file with `Ctrl + F`.
2. It will look like this:

```
<p className={styles.itemSize}>
    Partner Name
</p>
```

3. Change it so the name is wrapped in a `PartnerLink`. Only add the 2 new lines marked below. **Do not retype or change the name.**

```
<p className={styles.itemSize}>
    <PartnerLink href="WEBSITE ADDRESS">     ← add this line
        Partner Name
    </PartnerLink>                           ← add this line
</p>
```

(Don't paste the `← add this line` notes; they are only labels here.)

---

## 1D. Add a partner under "Student Success" (UNC only)

Search for `Student Success`. Below it you'll see a list where each partner looks like this:

```
<li>Student Wellness</li>
```

or, if it has a link:

```
<li>
    <PartnerLink href="https://studentwellness.unc.edu/">
        Student Wellness
    </PartnerLink>
</li>
```

To add a new one, click at the end of the **last** `</li>` in that list (right before `</ul>`), press Enter, and paste one of these:

**With a link:**

```
<li>
    <PartnerLink href="WEBSITE ADDRESS">
        PARTNER NAME
    </PartnerLink>
</li>
```

**Without a link:**

```
<li>PARTNER NAME</li>
```

---

## 1E. Rename or remove a partner

- **Rename:** find the name with `Ctrl + F` and change only the words. Leave all the symbols (`<` `>` `/`) around it alone.
- **Remove:** delete the **entire block** for that partner, from its opening `<p className={styles.itemSize}>` (or `<li>`) through its closing `</p>` (or `</li>`). If it has a link, the `<PartnerLink ...>` and `</PartnerLink>` lines are part of the block and must be deleted too. To select the whole block: click right before the `<` of the opening tag, hold **Shift**, and click right after the `>` of the closing tag.

---

## What each part of the partner code means

| Piece                             | What it does                                                                                               |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `<p className={styles.itemSize}>` | Starts one partner entry and gives it the standard text style. Must be paired with a closing `</p>`.       |
| `</p>`                            | Ends the partner entry.                                                                                    |
| `<PartnerLink href="...">`        | Starts a clickable link. `href` is the web address the link goes to. Must be paired with `</PartnerLink>`. |
| `PARTNER NAME`                    | The words people see on the page.                                                                          |
| `</PartnerLink>`                  | Ends the clickable link.                                                                                   |
| `<li>` / `</li>`                  | Same as `<p>`/`</p>`, but only used in the bulleted "Student Success" list.                                |

> **Characters to avoid in a partner name:** `<`, `>`, `{`, `}`. They have special meaning in code and will break the page. Ampersands (`&`) and apostrophes (`'`) are fine (for example `Student Life & Leadership` and `Sheriff's Office` already work).

---

# Part 2: Add a new tile / document to Reports on the "Resources" page

Adding a new report is **two edits in a row**:

- **Step 1:** Upload the PDF file to the project.
- **Step 2:** Edit `app/routes/research.tsx` to (a) tell the page about the PDF and (b) add the new tile.

You **must do Step 1 before Step 2.** If the PDF isn't uploaded yet, the site will fail to build.

## Step 1: Upload the PDF

1. **Get the PDF ready.** Rename it on your computer first, following these rules (the name must match exactly later):
    - Use **letters, numbers, and hyphens `-` only**. **No spaces and no parentheses.** (Spaces can work but are much easier to mistype.)
    - End with `.pdf` in lowercase.
    - Remember the exact spelling **and capital letters**. `My-Report.pdf` and `my-report.pdf` count as _different_ files.
    - Good example: `CCC-Alcohol-Survey-Report-2026.pdf`
    - The file must be **under 25 MB** (GitHub's limit for uploading in the browser).
2. Go to the upload page: **https://github.com/cssgunc/ccc/upload/main/app/assets**
   (Or navigate: repository home → `app` → `assets` → click the **"Add file"** button → **"Upload files"**.)
3. Make sure the page says you are uploading into `app/assets` (see the breadcrumb at the top).
4. Drag your PDF onto the page (or click "choose your files").
5. Scroll down. In the commit box, type a message like `Upload new report PDF`. Select **"Commit directly to the main branch"**, then click **"Commit changes"**.

## Step 2: Add the report to the Resources page

**File to edit:** `app/routes/research.tsx`
(Click `app` → `routes` → `research.tsx`. Direct link: https://github.com/cssgunc/ccc/blob/main/app/routes/research.tsx)

Open it with the pencil icon (✏️). You will make **two separate pastes** in this one file, then commit once at the end.

### Paste 1 of 2: the "import" line (tells the page the PDF exists)

Near the very top of the file there is a group of lines that start with `import`. A group of them mention `.pdf`, like:

```
import planPdf from "app/assets/CCC-Strategic-Plan-2024-27-1.pdf";
import report1 from "app/assets/Town-Gown-Full-Report_final.Report.1.pdf";
import report2 from "app/assets/Community-level-consequences-of-high-risk-drinking_final.Report.2.pdf";
...
import polysubReport from "app/assets/Polysub - Data Analysis Report (2026).pdf";
```

1. Find the **last** line in that group that ends with `.pdf";`
2. Click at the end of that line and press Enter to make a new line.
3. **Paste this:**

```
import NEWREPORTNAME from "app/assets/YOUR-FILE-NAME.pdf";
```

4. Replace the two placeholders:

| Placeholder          | What to put                                                                                                                                                                                                                                                                                                                                         | Example                              |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `NEWREPORTNAME`      | A short nickname for this PDF. **Letters and numbers only, no spaces, can't start with a number, and must not match any other nickname in the file.** The existing ones are `planPdf`, `report1`, `report2`, `report3`, `report4`, `polysubPresentation`, `polysubReport`. Use `report5` for your first new one, `report6` for the next, and so on. | `report5`                            |
| `YOUR-FILE-NAME.pdf` | The exact file name you uploaded in Step 1, including `.pdf`. Spelling and capital letters must match exactly. Keep the `app/assets/` part and the quote marks.                                                                                                                                                                                     | `CCC-Alcohol-Survey-Report-2026.pdf` |

**Finished example:**

```
import report5 from "app/assets/CCC-Alcohol-Survey-Report-2026.pdf";
```

> **Remember the nickname** (`report5` here). You'll use it again in Paste 2.

### Paste 2 of 2: the tile itself

1. Press `Ctrl + F` (or `Cmd + F`) and search for `</section>`. There is only one. Just above it you'll see the end of the list of tiles. It looks like this:

```
                                <ReportCard
                                    title="Alcohol and Polysubstance Use in Chapel Hill"
                                    summary="..."
                                    buttons={[ ... ]}
                                />
                                                         <<< PASTE YOUR NEW TILE HERE
                            </div>
                        </section>
```

2. Click at the end of the last `/>` (the one right above the `</div>` that sits above `</section>`) and press Enter to make a new line.
3. **Paste this:**

```
<ReportCard
    title="TITLE OF THE REPORT"
    summary="SHORT DESCRIPTION OF THE REPORT"
    buttonText="View Report"
    onClick={() => {
        openPDF(NEWREPORTNAME);
    }}
/>
```

4. Replace the placeholders. **Keep the quote marks around the title, summary, and buttonText.**

| Field (the word before the `=`)     | What it does                                                             | What to put                                                                                                                                                           |
| ----------------------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title="..."`                       | The big bold heading on the tile.                                        | Replace `TITLE OF THE REPORT` with the report's title.                                                                                                                |
| `summary="..."`                     | The paragraph of text on the tile.                                       | Replace `SHORT DESCRIPTION OF THE REPORT` with your description. Keep it on **one line** (don't press Enter) and don't use a straight double quote `"` inside it.     |
| `buttonText="View Report"`          | The words on the green button.                                           | Leave as `View Report`, or change it to something else (for example `View Brief`).                                                                                    |
| `onClick={() => { openPDF(...); }}` | What happens when someone clicks the button: the PDF opens in a new tab. | Replace `NEWREPORTNAME` with the **same nickname** you used in Paste 1 (for example `report5`). Do **not** put it in quote marks. Keep everything else exactly as is. |

**Finished example:**

```
<ReportCard
    title="Campus Alcohol Survey Results 2026"
    summary="This report summarizes survey responses from UNC-Chapel Hill students about alcohol use and offers recommendations for the campus community."
    buttonText="View Report"
    onClick={() => {
        openPDF(report5);
    }}
/>
```

### Commit

Click **"Commit changes..."**, type a message like `Add new report to Resources page`, choose **"Commit directly to the main branch"**, and click **"Commit changes"**. Wait 1 to 3 minutes, then check the Resources page.

---

## Optional variations for the new tile

### A. Make the tile full width

Tiles normally sit **two per row**. If you add a single tile, it will sit on the left with an empty space beside it. To make a tile stretch across the whole row, add one line, `className="md:col-span-2"`, right under `<ReportCard`:

```
<ReportCard
    className="md:col-span-2"
    title="TITLE OF THE REPORT"
    summary="SHORT DESCRIPTION OF THE REPORT"
    buttonText="View Report"
    onClick={() => {
        openPDF(NEWREPORTNAME);
    }}
/>
```

(Adding two tiles in a row makes them sit side by side, so you will not need this.)

### B. A tile with TWO buttons (for example a presentation and a report)

1. Upload **both** PDFs (Step 1, once per file) and add **two** import lines in Paste 1, each with its own nickname (for example `report5` and `report6`).
2. In Paste 2, paste this instead of the single-button version:

```
<ReportCard
    title="TITLE OF THE REPORT"
    summary="SHORT DESCRIPTION OF THE REPORT"
    buttons={[
        {
            text: "TEXT FOR BUTTON 1",
            onClick: () => openPDF(NICKNAME1),
        },
        {
            text: "TEXT FOR BUTTON 2",
            onClick: () => openPDF(NICKNAME2),
        },
    ]}
/>
```

| Placeholder         | What to put                                                               | Example                  |
| ------------------- | ------------------------------------------------------------------------- | ------------------------ |
| `TEXT FOR BUTTON 1` | The words on the first button. Keep the quote marks.                      | `Community Presentation` |
| `NICKNAME1`         | The nickname from the import line for the first PDF. **No quote marks.**  | `report5`                |
| `TEXT FOR BUTTON 2` | The words on the second button. Keep the quote marks.                     | `View Report`            |
| `NICKNAME2`         | The nickname from the import line for the second PDF. **No quote marks.** | `report6`                |

> Note: `buttons={[ ... ]}` replaces `buttonText` and `onClick`. Don't use both in the same tile. You can combine this with the full-width `className="md:col-span-2"` line from variation A.

### C. Remove or change the order of tiles

- **Remove a tile:** delete its whole block, from `<ReportCard` through its closing `/>`. (You can leave its `import` line at the top; it does no harm.)
- **Reorder:** tiles appear in the same order they are written in the file. Cut an entire `<ReportCard ... />` block and paste it somewhere else between two other blocks (never inside another block).

---

## Troubleshooting

**The site did not change after 5 minutes.**
Do a hard refresh (`Ctrl + Shift + R` / `Cmd + Shift + R`). If it's still the same, look at the symbol next to your commit on the repository's main page (see "How to know if it worked" above).

**There's a red X next to my commit (the build failed).**
The old version of the site is still live, so nothing is broken for visitors. The most common causes are:

| Cause                                                                        | Fix                                                                                                                            |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| The PDF file name in the `import` line doesn't match the uploaded file       | Check spelling, capital letters, hyphens, and `.pdf`. Compare it to the file listed in `app/assets`.                           |
| The nickname (e.g. `report5`) in Paste 2 doesn't match the import line       | Make them identical (capital letters count).                                                                                   |
| Two imports have the same nickname                                           | Give each PDF its own nickname.                                                                                                |
| A quote mark `"` was deleted, or a straight `"` was typed inside the summary | Make sure every title/summary/link has exactly one `"` at the start and one at the end, and none inside.                       |
| A `<`, `>`, `/`, `{`, or `}` was accidentally deleted or added               | Compare your tile or partner with the "finished example" and make yours match.                                                 |
| PDF was not uploaded before the import line was added                        | Upload the PDF (Step 1). Then re-run the build by making any tiny edit and committing again.                                   |
| Pasted a tile **inside** another tile, or outside the grid                   | The new `<ReportCard ... />` must be placed **between** two other tiles or after the last tile, above `</div>` / `</section>`. |

**How to fix a mistake after committing:** open the file again (pencil icon), correct the problem, and commit again. If you can't find the problem, ask the developer to look at the red X; the fix is usually a one-character typo.

**I'm not sure I did it right.**
Before committing, read your pasted code once and check: _Does every opening symbol have a matching closing symbol? Is every placeholder replaced? Are the quote marks still there?_ Compare it with the "finished example" in this guide.

---

## Quick reference (cheat sheet)

**Add a partner with a link** → edit `app/routes/people.tsx` → find the box → paste at the end of a column (before that column's `</div>`):

```
<p className={styles.itemSize}>
    <PartnerLink href="WEBSITE ADDRESS">
        PARTNER NAME
    </PartnerLink>
</p>
```

**Add a report tile** →

1. Upload PDF to `app/assets` (name: letters, numbers, and hyphens, ending in `.pdf`).
2. Edit `app/routes/research.tsx`:
    - Add under the other `import ... .pdf` lines:
      `import NEWREPORTNAME from "app/assets/YOUR-FILE-NAME.pdf";`
    - Add above `</div>` just before `</section>`:

```
<ReportCard
    title="TITLE OF THE REPORT"
    summary="SHORT DESCRIPTION OF THE REPORT"
    buttonText="View Report"
    onClick={() => {
        openPDF(NEWREPORTNAME);
    }}
/>
```

3. Commit directly to `main`, wait 1 to 3 minutes, hard refresh the site.
