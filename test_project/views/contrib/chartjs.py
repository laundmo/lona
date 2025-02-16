from copy import deepcopy
from random import randint

from lona.html import HTML, Button, Div, H2
from lona.contrib.chartjs import Chart
from lona.view import LonaView


class ChartJSView(LonaView):
    def handle_request(self, request):
        chart_data = {
           'labels': [
               'January',
               'February',
               'March',
               'April',
               'May',
               'June',
               'July',
           ],
           'datasets': [{
               'label': 'My First dataset',
               'backgroundColor': 'rgb(132, 99, 255)',
               'borderColor': 'rgb(132, 99, 255)',
               'data': [0, 10, 5, 2, 20, 30, 45],
           }]
        }

        chart = Chart(
            type='line',
            data=deepcopy(chart_data),
        )

        chart2 = Chart(
            type='line',
            data=deepcopy(chart_data),
        )

        html = HTML(
            H2('Chart.js'),

            Button('Update', id='update'),
            Button('Daemonize', id='daemonize'),
            Button('Stop', id='stop'),

            Div(
                chart,
                style={
                    'width': '600px',
                },
            ),
            Div(
                chart2,
                style={
                    'width': '600px',
                },
            ),
        )

        while True:
            input_event = self.await_input_event(html=html)

            if input_event.node_has_id('stop'):
                return

            elif input_event.node_has_id('daemonize'):
                self.daemonize()

            elif input_event.node_has_id('update'):
                # chart 1
                chart.data['data']['datasets'][0]['data'].append(
                    randint(0, 100),
                )

                chart.data['data']['datasets'][0]['data'].pop(0)

                # chart 2
                chart2.data['data']['datasets'][0]['data'].append(
                    randint(0, 100),
                )

                chart2.data['data']['datasets'][0]['data'].pop(0)
