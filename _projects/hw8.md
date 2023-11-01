---
name: Homework8 Project
tools: [Python, HTML, vega-lite]
image: assets/pngs/cars.png
description: Homework8 Project!
custom_js:
  - vega.min
  - vega-lite.min
  - vega-embed.min
  - justcharts
---


# Visualization 1
---
- **Origin**: HW7.

- **Description**: The first plot of this visualization visualizes the mean square footage of buildings of all counties. The second plot of this visualization visualizes the number of buildings in all counties. The second plot displays the histogram of numbers of buildings of the user-selected counties from the first plot of the visualization.

- **Design Choices**: I chose to use histograms to show the distribution of mean square footage and numbers of buildings in all counties. I set the number of bins to be 625 and 5, respectively, to make the number of bins in a generally suitable amount.

- **Altair Changes**: Aside from syntax changing, I removed the data transform and directly passed the "dataframe" inside the Chart function instead of using lists at first and transforming them later.

- **Interactivity**: For the first visualization, I used the brush selection to let users view the distribution of numbers of buildings of counties in selection. This lets users more closely examine the distribution of total numbers of buildings in counties along with different mean square roots of buildings.

<vegachart schema-url="{{ site.baseurl }}/assets/json/hw8_vis1.json" style="width: 100%"></vegachart>


# Visualization 2
---

- **Origin**: HW7.

- **Description**: This visualization visualizes the distribution of building square footage of all counties.

- **Design Choices**: I chose to use a scatter plot to show the distribution of the building's square footage. I set the scale for the y-axis to be "log" to display the data points normally. I chose to use a color scale to visualize the "year acquired". The color varies from black to white, indicating the age of the buildings. I think it's pretty intuitive to see black dots representing old buildings and white dots representing new buildings. 

- **Altair Changes**: Aside from syntax changing, I removed the data transform and directly passed the "dataframe" inside the Chart function instead of using lists at first and transforming them later.


<vegachart schema-url="{{ site.baseurl }}/assets/json/hw8_vis2.json" style="width: 100%"></vegachart>

<!-- these are written in a combo of html and liquid --> 

<div class="center">
{% include elements/button.html link="https://github.com/zf-w/zf-w.github.io/blob/main/python_notebooks/HW8.ipynb" text="The Data" %}
</div>

