

Clear all cells:

```javascript

const levels = ['0', '1', '2', '3', '4'];
const off = levels[0];
const on = levels[4];

const rowCount = 7; // y-axis
const colCount = 52; // x-axis

const topLeft = 0;
const topRight = colCount - 1;

// clear all cells
document.querySelectorAll('td.ContributionCalendar-day').forEach((cell) => {
    cell.setAttribute('data-level', '0');
});


// solid color
document.querySelectorAll('td.ContributionCalendar-day').forEach((cell) => {
    cell.setAttribute('data-level', '4');
});


// select top left pixel
const topLeft = document.querySelector('#contribution-day-component-0-0')
const bottomRight = document.querySelector('#contribution-day-component-6-51')
```

```html
<table data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:1975119,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:1975119,&quot;originating_url&quot;:&quot;https://github.com/ddrscott?action=show&amp;controller=profiles&amp;tab=contributions&amp;user_id=ddrscott&quot;}}" data-hydro-click-hmac="fbd2682ee233132db3f42d2668baf41a4198132971b4b260549762103ba61eff" role="grid" aria-readonly="true" class="ContributionCalendar-grid js-calendar-graph-table" style="border-spacing: 3px; overflow: hidden; position: relative">
    <caption class="sr-only">Contribution Graph</caption>

    <thead>
      <tr style="height: 13px">
        <td style="width: 28px">
          <span class="sr-only">Day of Week</span>
        </td>


          <td class="ContributionCalendar-label" colspan="3" style="position: relative">
            <span class="sr-only">May</span>
            <span aria-hidden="true" style="position: absolute; top: 0">May</span>
          </td>

          <td class="ContributionCalendar-label" colspan="5" style="position: relative">
            <span class="sr-only">June</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Jun</span>
          </td>

          <td class="ContributionCalendar-label" colspan="4" style="position: relative">
            <span class="sr-only">July</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Jul</span>
          </td>

          <td class="ContributionCalendar-label" colspan="4" style="position: relative">
            <span class="sr-only">August</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Aug</span>
          </td>

          <td class="ContributionCalendar-label" colspan="5" style="position: relative">
            <span class="sr-only">September</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Sep</span>
          </td>

          <td class="ContributionCalendar-label" colspan="4" style="position: relative">
            <span class="sr-only">October</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Oct</span>
          </td>

          <td class="ContributionCalendar-label" colspan="4" style="position: relative">
            <span class="sr-only">November</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Nov</span>
          </td>

          <td class="ContributionCalendar-label" colspan="5" style="position: relative">
            <span class="sr-only">December</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Dec</span>
          </td>

          <td class="ContributionCalendar-label" colspan="4" style="position: relative">
            <span class="sr-only">January</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Jan</span>
          </td>

          <td class="ContributionCalendar-label" colspan="4" style="position: relative">
            <span class="sr-only">February</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Feb</span>
          </td>

          <td class="ContributionCalendar-label" colspan="5" style="position: relative">
            <span class="sr-only">March</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Mar</span>
          </td>

          <td class="ContributionCalendar-label" colspan="4" style="position: relative">
            <span class="sr-only">April</span>
            <span aria-hidden="true" style="position: absolute; top: 0">Apr</span>
          </td>

          <td class="ContributionCalendar-label" colspan="2" style="position: relative">
            <span class="sr-only">May</span>
            <span aria-hidden="true" style="position: absolute; top: 0">May</span>
          </td>
      </tr>
    </thead>

    <tbody>
        <tr style="height: 10px">
          <td class="ContributionCalendar-label" style="position: relative">
            <span class="sr-only">Sunday</span>
            <span aria-hidden="true" style="clip-path: Circle(0); position: absolute; bottom: -3px">
              Sun
            </span>
          </td>

                <td tabindex="-1" data-ix="0" aria-selected="false" aria-describedby="contribution-graph-legend-level-0" style="width: 10px" data-date="2024-05-12" id="contribution-day-component-0-0" data-level="0" role="gridcell" data-view-component="true" class="ContributionCalendar-day" aria-labelledby="tooltip-b532ebf3-4926-4f1c-9ffc-3d4d1db5ef4b"></td>
  

                <td tabindex="-1" data-ix="1" aria-selected="false" aria-describedby="contribution-graph-legend-level-0" style="width: 10px" data-date="2024-05-19" id="contribution-day-component-0-1" data-level="0" role="gridcell" data-view-component="true" class="ContributionCalendar-day" aria-labelledby="tooltip-a3bef370-2a37-43ee-a608-43a2cf8db349"></td>
  

                <td tabindex="-1" data-ix="2" aria-selected="false" aria-describedby="contribution-graph-legend-level-0" style="width: 10px" data-date="2024-05-26" id="contribution-day-component-0-2" data-level="0" role="gridcell" data-view-component="true" class="ContributionCalendar-day" aria-labelledby="tooltip-047163af-adda-49ea-9324-eefdaa331ca0"></td>
  

                <td tabindex="-1" data-ix="3" aria-selected="false" aria-describedby="contribution-graph-legend-level-0" style="width: 10px" data-date="2024-06-02" id="contribution-day-component-0-3" data-level="0" role="gridcell" data-view-component="true" class="ContributionCalendar-day" aria-labelledby="tooltip-23e8883f-3b8b-43cb-92e8-eea73a0e9001"></td>
  

                <td tabindex="-1" data-ix="4" aria-selected="false" aria-describedby="contribution-graph-legend-level-0" style="width: 10px" data-date="2024-06-09" id="contribution-day-component-0-4" data-level="0" role="gridcell" data-view-component="true" class="ContributionCalendar-day" aria-labelledby="tooltip-13a9ba24-e64a-4c0c-8150-697d6fddc6c3"></td>
        </tr>
    </tbody>
</table>
```
