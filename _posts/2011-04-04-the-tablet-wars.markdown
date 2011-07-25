--- 
layout: post
title: "The Tablet Wars"
date: 2011-04-04 11:43:17 -0600
---

A [Business Insider article](http://www.businessinsider.com/microsoft-had-to-make-windows-the-center-of-its-tablet-strategy-even-if-it-kills-them-2011-4) got me thinking about Microsoft's tablet strategy. Matt Rosoff asserts that Microsoft CEO Steve Ballmer had no choice but to pursue the Windows Tablet strategy because of the extreme profit margins that Microsoft receives from the Windows and Office software licenses. While this is a valid point, it is totally ridiculous to think that Ballmer had no other viable options.
<br/>
###The Mobile Landscape
<script type="text/javascript">
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var oses =
          ['Android', 'iOS',
           'RIM', 'Windows Phone', 'Other'];
        var years = ['2009', '2010', '2011', '2014'];
        var productionByOS = [[6798.4, 47462.1, 91937.7, 259306.4],
                                   [24889.8, 41461.8, 70740.0, 130393.0],
                                   [34346.8, 46922.9, 62198.2, 102579.5],
                                   [15031.1, 12686.5, 21308.8, 34490.2],
                                   [10431.9, 12588.1, 26017.3, 84452.9]];
      
        // Create and populate the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        for (var i = 0; i < oses.length; ++i) {
          data.addColumn('number', oses[i]);
        }
        data.addRows(years.length);
        for (var i = 0; i < years.length; ++i) {
          data.setCell(i, 0, years[i]);
        }
        for (var i = 0; i < oses.length; ++i) {
          var os = productionByOS[i];
          for (var year = 0; year < years.length; ++year) {
            data.setCell(year, i + 1, os[year]);
          }
        }
        // Create and draw the visualization.
        var ac = new google.visualization.AreaChart(document.getElementById('visualization'));
        ac.draw(data, {
          title : 'Mobile Smartphone Market',
          isStacked: false,
          width: 600,
          height: 400,
          vAxis: {title: "Thousands of Units Sold"},
          hAxis: {title: "Year"},
          backgroundColor: "#F5F5F5"
        });
      }
      

      google.setOnLoadCallback(drawVisualization);
</script>
<div id="visualization" style="width: 600px; height: 400px;"></div>
<span style="font-size:small;text-align:center;">[data]()</span>
<br/>
The mobile landscape is important in this discussion because the two clear frontrunners in the tablet market are Google and Apple. Un-coincidentally, they are also the leaders in the smartphone market (when Symbian is left out). The shift here is less about the shift to a different form factor and more about the shift to more "personal" computers in the interaction sense.  
<br/>
Microsoft's Windows Phone 7 seems to have come too late to the party and they're still play catch-up in what appears to be an already stratified arena. The lack of success with Windows Phone 7 makes it that much harder for Microsoft to determine which route to pursue. They can try to bring Windows down to the tablet or try bringing Windows Phone 7 up to the tablet. I would expect to see some blending of Windows Phone 7 and Windows in the near future, much as Apple is doing with Lion but to a much greater degree if Windows is to sit in the tablet middle ground.  
<br/>
###Do Tablets Cannibalize?

The biggest question is whether tablet computers will actually cannibalize desktop and laptop sales. Gartner [certainly seems to think so](http://www.gartner.com/it/page.jsp?id=1570714), since their latest projections of desktop and laptop sales were reduced by 1.2% to account for this. Apple's own COO, Tim Cook, [said](http://www.macworld.com/article/157247/2011/01/cook.html) that "there is some cannibalization" but that it creates "some halo effect from Apple product to Apple product". He jokingly added: "If this is cannibalization, it feels pretty good."  
<br/>
[Many](http://digitaldaily.allthingsd.com/20110208/tablet-cannibalization-on-the-rise-in-2011/) [other](http://online.wsj.com/article/SB10001424052748703376504575491533125103528.html?mod=e2tw) [forecasts](http://digitaldaily.allthingsd.com/20101215/forecast-19-million-notebooks-lost-to-tablet-cannibalization-in-2011/?mod=ATD_rss) seem to show cannibalization being an obvious issue for computer manufacturers. It seems that tablets may cannibalize current PC sales but that Microsoft has no real choice. They must get into the market as soon as possible or risk losing major ground.
<br/>
###Even The Analysts See It

Late last year, a Goldman Sachs analyst [downgraded Microsoft stock](http://www.businessinsider.com/goldman-downgrades-microsoft-msft) largely because of the mobile market.  
<br/>
>We believe that top-line momentum and hence investor sentiment on Microsoft’s core Windows and Office franchises is unlikely to improve until the company gains a firmer foothold in the growing migration to mobile devices – both smartphones and tablets. We don’t see this happening this year as Apple’s iPad and iPhone plus Google’s Android operating system are well established; a Windows- based mobile device could certainly begin to garner momentum in 2011, but the stock remains in show-me mode until at least then, in our view.  
<br/>
A Morningstar report from earlier this year points out this predicament very clearly.  
<br/>
>Any potential near-term share losses at the low end of the market will probably be immaterial to Microsoft's earnings power; more concerning are the longer-term implications for the stickiness of the Windows operating system. As consumers get trained on tablets and smartphones based on Apple's iOS and Google's GOOG Android operating systems, they could become more willing to switch to alternative operating systems for their primary computing devices. **The longer Microsoft stays out of the tablet market, the greater the risks to the Windows franchise in the long run.**  
<br/>
Microsoft needs to make an entrance into the tablet market as soon as possible. Unfortunately, the same analyst believes that "Microsoft appears to be about two years away from a response to Apple's AAPL successful iPad tablet." And he is certainly not the only one. Microsoft is also [not](http://online.wsj.com/article/SB10001424052748703712504576234352629684640.html) [the only](http://blogs.barrons.com/techtraderdaily/2011/03/24/ctia-rim-will-struggle-with-7-tablets-says-cowen/) [competitor](http://www.pcmag.com/article2/0,2817,2375405,00.asp) struggling to meet the iPad's explosive entrance.  
<br/>
They go on to mention the cannibalization of notebook sales by tables and are more concerned that "Windows does not yet have a presence." This simple fact is overlooked by Rosoff. Even though there is a possibility that Apple is cannibalizing its own personal computer sales, at least its own iOS devices are the cannibals. Whether or not Microsoft or Apple are more interested in a lower margin tablet market, there is one competitor who certainly is interested: Google.
<br/>
###Google's Role

The release of Honeycomb shows that Google will definitely continue to push their mobile Android OS into the tablet future. Google releases nearly all of the software it produces for free. Excellent examples of this approach include Gmail, Google Docs, Google Apps, and Google Analytics. All of these applications are powerful and would have commanded fairly expensive licenses less than a decade ago. Instead, Google is distributing its software at no cost to device manufacturers in order to increase reach and encourage people to use Google's ad-supported services (since 96% of their revenue came from sales [last year](http://investing.businessweek.com/research/stocks/financials/drawFiling.asp?docKey=136-000119312511032930-303K82196D92IQSGSQ30SPLFNT&docFormat=HTM&formType=10-K#D10K_HTM_TX120214_105)).  
<br/>
The obvious retort to this argument is that Microsoft and Apple are in two very different situations. Apple's significantly lower market share in the desktop and mobile computer sectors means that there is less to cannibalize and more consumers to convert. It is also clear that the mobile device market is much better suited to Apple's closed ecosystem approach and plays strongly to their dedication to user experience and product design.  
<br/>
We will have more information on exactly how iPad sales are affecting (at least Apple's) personal computer sales. The last five years has seen a rapidly changing personal computer environment and it isn't fair to attribute a loss of notebook and desktop sales to the tablet form factor. It is a larger combination of mobile computing devices that provide more direct user interaction. I'd expect Apple to continue pursuing such devices in the foreseeable future.