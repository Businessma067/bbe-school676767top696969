#!/usr/bin/env python3
"""Hand-authored statement-only tactical_explanations for ch3 cases [0:32]."""
from __future__ import annotations

import json
import re
from pathlib import Path

PATH = Path("/workspace/src/data/economics-cases-ch3-subtopics.json")


def wrap(body: str, truth: bool) -> str:
    body = body.replace("\u2014", ", ").replace("\u2013", "-").strip()
    body = re.sub(r"[ \t]+\n", "\n", body)
    body = re.sub(r"\n{3,}", "\n\n", body)
    v = "True" if truth else "False"
    return f"{body}\n\nSo the statement is {v}."


EXPL: dict[str, list[str]] = {}

EXPL["CASE 3.1.01"] = [
    # A
    "Schedule coordination is still human effort applied to production. Managers who set shifts and allocate people are labour as a human resource, even when their work is desk-based rather than shop-floor.",
    # B
    "Claims handlers who process insurance policies perform service work for the firm. That human input is labour, not capital or land. A service firm without people to handle policies cannot deliver the product, so the handlers sit squarely inside the labour factor.",
    # C
    "Labour covers planners, accountants, supervisors, and shop-floor workers alike whenever human effort goes into production. Restricting labour to manual tasks invents a false split.\n\nA planner who sequences jobs and an accountant who tracks costs both supply human resources. Excluding them would leave most offices outside the labour factor, which contradicts how firms actually combine people with machines and materials.",
    # D
    "Installing software is an activity performed for a client: human skills applied as labour. Intangibility makes it a service, not a \"want.\" Wants are consumption preferences; labour is a production factor. Mixing those categories mislabels the installer's work.",
    # E
    "Seasonal pickers work for wages during harvest weeks and still supply labour. Contract length does not reclassify the factor. Short employment remains human effort in production.",
]

EXPL["CASE 3.1.02"] = [
    # A
    "Hillside vineyards are natural resources under the land factor: soil, slope, and climate used to grow grapes. Ownership papers do not change that classification.",
    # B
    "Seasonal pickers harvest grapes; the cellar master guides fermentation and blending. Both roles apply human effort to wine production, so both supply labour. Permanence of contract is irrelevant to the factor label.",
    # C
    "A leased bottling line is equipment used to finish wine for sale. Capital is defined by productive use, not by title deeds. Renting the line still places it among the winery's capital inputs for the season.\n\nIf only owned machines counted as capital, every leased press or filler would vanish from the factor list while still shaping output. Lease versus purchase changes financing, not the economic role of the equipment.",
    # D
    "Fermentation know-how applied when blending batches is knowledge used in production. It sits beside land, labour, and capital as a distinct input that raises the quality and yield of the wine.",
    # E
    "Ordering barrels is a capital choice, yet someone still decides timing, suppliers, and risk. That organising role is entrepreneurship; capital decisions do not erase it.",
]

EXPL["CASE 3.1.03"] = [
    # A
    "River water drawn to irrigate crops is a natural resource. In factor language that places it under land, alongside soil and climate used in farming.",
    # B
    "Timber already cut and ready for milling is a harvested material or intermediate good, not land. Land covers the standing forest and natural endowment; once trees are felled and stacked for the mill, the input has left the land category.",
    # C
    "Mineral rights grant access to deposits in the ground. They belong with natural-resource land inputs, even though rights can be traded. Tradability alone does not turn a natural endowment into capital equipment.\n\nCapital would be the drills, conveyors, or processing plant used to extract and handle ore. Buying and selling the rights changes ownership of access to land, not the factor type of the deposit itself.",
    # D
    "Oak barrels are manufactured containers used to age wine: capital goods. Oak trees in a forest are land; shaped barrels are not. Originating from forest wood does not keep finished cooperage inside the land factor.",
    # E
    "Land includes forests, fisheries, mineral deposits, and water, not only fenced factory plots. Narrowing land to industrial sites excludes core natural-resource inputs.",
]

EXPL["CASE 3.1.04"] = [
    # A
    "Diagnostic tools leased to technicians still help deliver repairs. Productive equipment counts as capital whether owned or hired for the job.",
    # B
    "Spare parts held for same-day repairs are stock tied up to keep service flowing. That inventory supports production of repairs and therefore sits with capital, alongside tools and vehicles used in the workshop.",
    # C
    "Capital in this chapter covers machinery, plant, vehicles, and financial resources committed to operations. Factories, fleets, and cash buffers used to keep production moving all belong in that bundle.\n\nTreating capital as \"machines only\" would omit working balances that pay wages and buy inputs between invoice cycles. The broad list in the statement matches how firms actually fund and equip their work.",
    # D
    "Cash held specifically to cover payroll between invoice receipts is financial capital. Without that buffer, shifts stop even if machines sit idle. Money reserved for operations is part of the capital factor here.",
    # E
    "Delivery vans that ship finished goods are vehicles used in production and distribution. That fleet is capital, not a consumer toy parked at home.",
]

EXPL["CASE 3.1.05"] = [
    # A
    "Tools and testing gear on a manufacturing line are capital used in secondary production. They shape and check output rather than serving as natural land.",
    # B
    "Engineers who monitor product quality apply specialised human skills on the shift. That effort is labour, distinct from the machines they watch and the materials they inspect.",
    # C
    "Plant managers who coordinate materials, staff rotas, and customer orders organise the other factors into a running shift. That coordinating, risk-bearing role is entrepreneurship in the factory setting.\n\nScheduling copper deliveries, assigning engineers, and deciding which orders to prioritise are not the same as turning a wrench. The organising layer sits above pure task labour and capital use.",
    # D
    "Copper already purchased as an input is a material for manufacturing, not land. Land covers deposits in the earth; once copper is extracted and bought as stock, it has left the natural-resource land category.",
    # E
    "Production know-how is a knowledge factor even without patents. Registration protects rights; it does not create the factor from a consumer good.",
]

EXPL["CASE 3.1.06"] = [
    # A
    "Entrepreneurs assemble land, labour, and capital into organised production. Bringing those factors together is the core of the entrepreneurship role.",
    # B
    "Entrepreneurs bear uncertainty about demand, costs, and timing; lenders take credit risk of a different kind. Claiming only lenders face uncertainty erases the founder's exposure when a venture fails or thrives.",
    # C
    "Financial resources are capital: cash and funding used in operations. Entrepreneurship is the organising and risk-bearing function that decides how those funds, people, and assets are combined.\n\nSharing the word \"decisions\" does not collapse the two factors. A loan balance is capital; choosing which product to launch with that loan is entrepreneurship. Mixing the labels blurs both definitions.",
    # D
    "Hiring staff adds labour, yet someone still coordinates suppliers, pricing, and strategy. Employment contracts do not dissolve entrepreneurship into pure wage work.",
    # E
    "Choosing which machines to buy is an entrepreneurial allocation decision, even though the machines themselves are capital. Selection is not \"capital only.\"",
]

EXPL["CASE 3.1.07"] = [
    # A
    "Licensed diagnostic software used by repair technicians is technology applied in a service firm. It improves how faults are found without being a physical spare part.",
    # B
    "Years of fermentation experience guide blending and timing in a winery. That know-how is knowledge contributing to output beside grapes, barrels, and labour hours.",
    # C
    "Technology at a repair bench, from diagnostic apps to specialised tooling methods, counts as a production factor in services just as it does in factories. The sector label does not strip technology out of the factor list.\n\nA laptop clinic that relies on licensed software to read error codes is using technology to produce repairs. Limiting technology to hardware makers alone would misdescribe service production.",
    # D
    "Service firms use technology constantly: booking systems, diagnostic licences, and digital workflows. Restricting the factor to physical-hardware manufacturers is too narrow and false.",
    # E
    "Design know-how is knowledge, not capital, even if files sit on servers. Storage media are capital; the expertise itself is the knowledge factor.",
]

EXPL["CASE 3.1.08"] = [
    # A
    "Weekend laptop repairs draw on know-how, staff time, diagnostic apps, spare parts, and someone organising bookings. That mix is knowledge, labour, technology, capital, and entrepreneurship together.",
    # B
    "Coordinating bookings, ordering parts, and sequencing repairs is the organising role that turns inputs into billed jobs. That coordination is entrepreneurship for the small IT-support venture.",
    # C
    "Repair kits plus licensed diagnostic apps are the technology layer of the offer: methods and tools that shape how faults are found and fixed. They sit beside spare screens as a distinct input type.\n\nWithout those apps and kits, staff would guess more and finish fewer weekend calls. Technology here is not optional decoration; it is part of how the service is produced.",
    # D
    "Spare screens and batteries held for swaps are capital stock waiting to enter repaired machines. Inventory dedicated to production belongs with capital inputs for the workshop.",
    # E
    "Time spent diagnosing faults is human effort: labour. The technician's hours are the labour input that turns parts and apps into a working laptop.",
]

EXPL["CASE 3.1.09"] = [
    # A
    "Service firms still need capital equipment, technology, and someone to coordinate work. Labour alone rarely delivers a finished service offer.",
    # B
    "Any business that supplies goods or services combines production factors to create what customers buy. Factor combination is the ordinary recipe behind both physical products and service packages.",
    # C
    "A dominant factor never cancels the others. A labour-heavy coaching studio still needs rooms or platforms (capital), methods (knowledge or technology), and someone who books clients (entrepreneurship).\n\nCalling one factor \"enough\" would describe an empty shell. Dominance changes proportions; it does not erase complementary inputs required to finish the offer.",
    # D
    "Services combine factors too: trainers, software, venues, and scheduling. Manufacturing is not the only sector that mixes land, labour, capital, and entrepreneurship.",
    # E
    "Automated lines still need programmers, maintainers, and process knowledge. Automation shifts labour mix; it does not wipe labour and knowledge from manufacturing.",
]

EXPL["CASE 3.1.10"] = [
    # A
    "Oak barrels held to age wine are equipment in the production chain. That stock is capital supporting the cellar process until bottling, not a natural land input.",
    # B
    "Fermentation experience guides timing and blending decisions. Knowledge sits alongside vineyard land, pickers, and barrels as a separate productive input in winemaking.",
    # C
    "A large vineyard operation uses soil and slopes (land), pickers and cellar staff (labour), barrels and presses (capital), and an owner who organises harvests and sales (entrepreneurship). Integrated winemaking is a textbook factor mix.\n\nDropping any one of those pieces stalls output: no vines, no hands, no equipment, or no coordinating decisions. The statement correctly lists the combination for a sizeable wine business.",
    # D
    "Soil fertility is a natural-resource land input; bottling machinery on the same estate is capital. Sharing a site does not turn machines into land or soil into equipment.",
    # E
    "Seasonal harvest workers supply labour just as permanent cellar staff do. Employment duration does not exclude pickers from the labour factor during crush season.",
]

EXPL["CASE 3.1.11"] = [
    # A
    "Capital is the resources used in production; entrepreneurship is the organising function that combines them. The two labels are not synonyms.",
    # B
    "Planning hours are human effort: labour (and often entrepreneurship when founders plan strategy). Saving a plan file on a disk does not convert the thinking time into capital equipment.",
    # C
    "An owner who also repairs phones can supply labour with their hands while still bearing risk and coordinating suppliers as an entrepreneur. One person may wear both factor roles in a small shop.\n\nTask work and organising work are different functions even when the same individual performs them on the same day. The statement allows that overlap correctly.",
    # D
    "Founders who coordinate suppliers and staff perform entrepreneurship distinct from the hours spent on a single repair task. Coordination and risk sit in the entrepreneurial column.",
    # E
    "Bearing business risk is entrepreneurship, not labour, even though worry takes time. Hours of anxiety do not reclassify risk-bearing as wage labour.",
]

EXPL["CASE 3.1.12"] = [
    # A
    "A leased bottling line still bottles wine for sale each vintage. Use in production, not ownership papers, is what places the hired line in the capital factor.",
    # B
    "Leased warehouse robots that move stock beside manual pickers are capital equipment in the hub. Hiring them does not turn machines into labour or land.",
    # C
    "Renting a building does not empty it of capital. Installed tools, racks, and machines used inside rented premises remain capital inputs for whoever operates them.\n\nA workshop that leases its shell but owns or hires presses still relies on those presses as capital. Premises tenure and equipment classification are separate questions.",
    # D
    "Hire-purchase machines are capital goods being paid for over time. Standing on a workshop floor does not make them land. Land is the natural site or resource, not manufactured equipment.",
    # E
    "Seasonal outdoor leases leave harvesters and presses as capital equipment. Working on open terrain does not redefine those machines as land inputs.",
]

EXPL["CASE 3.1.13"] = [
    # A
    "Crew members running chainsaws and harvesters apply human effort to fell timber before winter. That effort is labour in the forestry operation on the mountain.",
    # B
    "Supervision can include entrepreneurial choices about which stands to cut before winter closes access. Labelling all supervision as \"labour only, never entrepreneurship\" is too absolute for extraction crews.",
    # C
    "Trees growing naturally provide a land resource, but logging still needs labour, machines, and organising decisions. Natural growth does not mean land alone produces timber on the market.\n\nWithout chainsaws, harvesters, and a crew schedule, standing forests stay unharvested. The claim that logging uses land alone ignores every other factor on the mountain.",
    # D
    "Harvesters are capital equipment operating on forest land. Working among trees does not convert those machines into the land factor itself or erase labour.",
    # E
    "Forests remain natural-resource land after cutting begins. Harvesting timber does not flip the standing resource into capital equipment overnight.",
]

EXPL["CASE 3.1.14"] = [
    # A
    "Cash reserved to pay wages between invoice cycles is working capital. That financial buffer is a capital input that keeps production staffed when receipts lag.",
    # B
    "Borrowed funds spent on diagnostic tools become capital applied to production: money turned into equipment that supports repair output. Financing source does not bar the funds from the capital factor.",
    # C
    "Capital here covers both physical kit and financial resources used in production. Presses and vans sit beside cash balances and credit lines that keep operations running.\n\nA manufacturer with machines but no payroll float still stalls. Including financial resources alongside equipment matches how firms actually sustain output between customer payments.",
    # D
    "Manufacturers also use loans, retained earnings, and working balances, not only share capital. Claiming share capital is the sole allowed form is false.",
    # E
    "Emergency cash held for surprises is financial capital, not land. Storing notes on business premises does not turn money into a natural-resource plot.",
]

EXPL["CASE 3.1.15"] = [
    # A
    "Service staff who troubleshoot, coach, or install software supply labour. Excluding them to protect a manufacturing-only definition of labour is wrong.",
    # B
    "Technical support workers who fix home networks apply human skills to a service product. That human resource input is labour in a knowledge-intensive firm.",
    # C
    "Freelance trainers delivering coaching sessions provide labour to the studio that organises the offer, even when they are not permanent employees. Contract form does not remove human effort from the labour factor.\n\nThe studio still depends on those teaching hours to deliver the service. Calling only factory floor roles \"labour\" would erase the trainers from the factor list while they produce the core output.",
    # D
    "Installing software for a client uses human skills as labour. The installer's competence is the production factor, distinct from the licence file or laptop hardware.",
    # E
    "Specialists and general staff both count when human resources are deployed in services. Skill level changes pay grades, not whether labour is present.",
]

EXPL["CASE 3.1.16"] = [
    # A
    "Fabric bought for client orders is material combined with apprentices' labour and sewing machines. Materials join the other inputs in the workshop mix.",
    # B
    "Selecting hire-purchase machines and scheduling growing order books is entrepreneurial coordination. The Graz tailor organises capital and labour rather than only stitching every seam personally.",
    # C
    "Apprentices who cut patterns and stitch garments supply labour hours to the workshop. Their human effort turns fabric and machine time into finished clothing.\n\nTraining status does not remove them from the labour factor. As the workshop grows, those apprentice hours remain a core human-resource input beside the tailor's own work.",
    # D
    "Designs in the tailor's head are knowledge, and machines plus fabric are still required. Labour alone cannot sew without materials and capital equipment.",
    # E
    "Hire-purchase sewing machines are capital occupying workshop floor space. Using room on a plot does not reclassify manufactured equipment as land.",
]

EXPL["CASE 3.2.01"] = [
    # A
    "Mining ore extracts a raw material (primary); smelting it into metal ingots transforms that material (secondary). The two stages sit in different sectors.",
    # B
    "Banking, insurance, and coaching are intangible service activities. They belong in the tertiary sector, not in extraction or manufacturing of physical goods.",
    # C
    "Primary activity covers farming, fishing, mining, and forestry that pull raw materials from nature. Those extractive and harvesting tasks feed later manufacturing and services.\n\nListing those four fields together matches the standard three-sector map: primary gathers inputs, secondary processes them, tertiary serves. The statement correctly scopes the primary stage.",
    # D
    "Banking and insurance are tertiary services. Calling them \"basic needs\" does not move finance into the primary extraction sector with farms and mines.",
    # E
    "Secondary manufacturing shapes goods from materials; it does not deliver banking or insurance. Those financial services belong in the tertiary sector.",
]

EXPL["CASE 3.2.02"] = [
    # A
    "Lift passes and ski lessons sold to visitors are services, not extraction or factory work. That places them in the tertiary sector of the Tyrolean resort's offer.",
    # B
    "Instructors teaching on the slopes supply labour, not capital. Capital would be lifts, snowcats, or rental fleets. Human teaching effort stays in the labour column.",
    # C
    "Making skis on site would be secondary manufacturing: shaping materials into equipment. Guest consumption of the mountain experience does not keep a ski factory inside the tertiary sector.\n\nServices and manufacturing can share a resort campus, yet the factory line itself is secondary. Experience tourism does not redefine fabrication.",
    # D
    "Guest services use snow as a setting, but the activity is hospitality and instruction, not primary extraction of a natural resource for sale as raw material.",
    # E
    "Operating on a mountainside does not make a ski resort primary. Location is not the sector test; delivering guest services is what classifies the resort.",
]

EXPL["CASE 3.2.03"] = [
    # A
    "A coal mine that extracts ore from the ground is classic primary-sector activity: raw material pulled from nature before any smelting begins.",
    # B
    "An olive farm that harvests fruit and presses oil on the agricultural holding remains in primary agriculture for this classification. Farm-level pressing tied to the harvest is treated as primary activity here.",
    # C
    "Forestry concessions that supply logs to mills extract timber from natural stands. That extraction stage is primary, before mills reshape the wood.\n\nThe concession's product is raw logs entering the next stage. Sector labels follow that extraction role rather than the eventual use of boards in furniture or construction.",
    # D
    "A timber mill that turns logs into export boards performs secondary manufacturing. Transformation of materials into processed wood products leaves the primary stage.",
    # E
    "Commercial fishing that lands herring for sale extracts a natural resource from the sea. That landing activity is primary-sector work, not manufacturing.",
]

EXPL["CASE 3.2.04"] = [
    # A
    "Selling finished jackets in a shop is retail trade, a tertiary service of distribution rather than the sewing stage that produced the garments.",
    # B
    "Warehousing steel before it is welded is a logistics service. Holding and moving materials for others sits in the tertiary sector, separate from the welding itself.",
    # C
    "A car plant that assembles vehicles transforms parts into finished cars. That manufacturing process is secondary, even though customers eventually drive the cars.\n\n\"Serving customers\" does not pull assembly into the tertiary sector. Almost every producer serves buyers; the sector test is the nature of the activity, not the existence of a customer.",
    # D
    "Sewing jackets is manufacturing and therefore secondary. Later retail sale may be tertiary, but the sewing stage itself is not retail trade.",
    # E
    "Smelters that shape metal perform secondary transformation of materials. Ore's underground origin does not keep the smelting stage in the primary sector.",
]

EXPL["CASE 3.2.05"] = [
    # A
    "Repair and rebuild after floods add measured output when construction is counted. Measured GDP can therefore rise even after ecological damage.",
    # B
    "Bridge rebuild spending is construction of final infrastructure counted in GDP. National accounts record that production value when the work is done within the economy.",
    # C
    "Rebuild outlays can lift measured GDP while people still face lost homes, disrupted travel, and lower wellbeing. GDP tracks monetary production, not happiness or environmental health.\n\nA municipality that replaces washed-out bridges generates counted construction even as citizens remain worse off than before the flood. The statement correctly separates the statistical rise from lived welfare.",
    # D
    "GDP summarises the monetary value of final goods and services produced inside national borders over a period. That is the core definition used in the accounts.",
    # E
    "Rebuild activity can raise measured GDP while wellbeing falls after floods. Equality between GDP and citizen wellbeing after disasters therefore does not hold.",
]

EXPL["CASE 3.2.06"] = [
    # A
    "Bank branches that provide loans deliver financial services to households and firms. That activity belongs in the tertiary sector, not in extraction or manufacturing.",
    # B
    "Remote coaching sold to foreign clients is still a service: intangible training delivered across borders. Distance and client nationality do not move it out of the tertiary sector.",
    # C
    "Smelting ore into metal ingots on site transforms materials into a processed product. That process is secondary manufacturing, listed here as a contrast with service examples.\n\nPutting smelting beside banking and helpdesks clarifies the sector map: transformation versus service delivery. The smelting letter is correctly tagged secondary.",
    # D
    "Software helpdesks that troubleshoot home networks provide tertiary services. Human support over a line is service output, not extraction or factory work.",
    # E
    "Insurance cooperatives that process claims provide tertiary financial services. Claims handling is not primary extraction of natural resources from the earth.",
]

EXPL["CASE 3.2.07"] = [
    # A
    "When farming still employs a large share of workers, the primary sector dominates the employment structure in less developed economies relative to services.",
    # B
    "As development advances, agriculture and other primary shares typically shrink relative to industry and services. That shift is the usual sectoral pattern in the model.",
    # C
    "Emerging economies usually show larger, not smaller, primary shares than advanced EU states. Advanced economies have already shifted toward services and industry.\n\nComparing a farm-heavy emerging structure with a service-heavy EU structure runs the opposite way from the claim. The letter reverses the standard development pattern students are meant to remember.",
    # D
    "Tertiary shares above seventy percent of GDP are typical of highly developed economies, not of most emerging ones still building industry and services.",
    # E
    "Advanced services above seventy percent of output characterise developed economies in the model, not most emerging ones still building industry and services.",
]

EXPL["CASE 3.2.08"] = [
    # A
    "Fabricating electronic components transforms materials into parts for later assembly. That manufacturing process belongs to secondary-sector activity.",
    # B
    "An olive farm selling farm-pressed oil remains primary agricultural activity in this classification. Bottling on the farm does not automatically push the whole farm into secondary manufacturing like a separate industrial plant.",
    # C
    "Selling to customers does not make every producer tertiary. Farms and factories sell constantly while staying primary or secondary by activity type.\n\nIf \"has customers\" meant tertiary, sector labels would collapse into one pile. The olive farm and the component factory keep their extraction and manufacturing classifications despite sales.",
    # D
    "Business-to-business sales of fabricated parts are still secondary manufacturing. Destination of the parts does not turn the factory into a tertiary service firm.",
    # E
    "Harvesting and pressing olives on the farm is primary agriculture in this classification, not tertiary, even when bottled oil is sold to customers.",
]

EXPL["CASE 3.2.09"] = [
    # A
    "Advanced EU economies are service-dominated even though food production remains important. Dominance describes output shares, not whether farming exists.",
    # B
    "In highly developed EU economies the tertiary sector often exceeds seventy percent of output. That service-heavy structure is the pattern the chapter associates with advanced development.",
    # C
    "Higher GDP per capita in EU member states is linked in the model to higher living standards. Income per person is used as a rough indicator of average material living conditions across those economies.\n\nThe link is comparative and stylised, not a claim that GDP captures every dimension of welfare. Still, the statement correctly connects elevated GDP per capita with high living standards in that teaching model.",
    # D
    "A seventy percent-plus service share means tertiary dominance, not primary dominance. Primary would be agriculture, mining, and similar extraction shares.",
    # E
    "Developed EU states do not keep primary output above seventy percent of GDP. Food still matters, but primary shares are far smaller than that threshold.",
]

EXPL["CASE 3.2.10"] = [
    # A
    "GDP focuses on final goods and services so intermediate factory sales are not double-counted. Final demand, not every shipment between plants, enters the total.",
    # B
    "GDP is typically compiled for production within a year inside national borders. The annual, territorial frame is part of how the measure is defined for comparisons.",
    # C
    "Gross domestic product adds the monetary value of final goods and services produced within a country's borders. Money values make unlike products addable; \"final\" avoids counting the same value twice through the supply chain.\n\nBorders define the geographic scope: output made inside the country counts, whether sold at home or abroad as exports. That is the standard textbook definition restated cleanly.",
    # D
    "Domestic production counts regardless of whether the firm is locally or foreign-owned. Territory of production, not passport of the owner, sets the GDP boundary.",
    # E
    "Insurance and other final services produced domestically enter GDP totals just as final goods do. Services are not excluded from the national production measure.",
]

EXPL["CASE 3.2.11"] = [
    # A
    "A high service share says nothing by itself about environmental sustainability of every GDP component. Composition and green impact are separate questions.",
    # B
    "Seventy-four percent services means the tertiary sector leads output, not the primary sector. Primary leadership would require extraction and farming to dominate the total.",
    # C
    "Service shares around three-quarters of output are typical for economically advanced EU countries. The reported seventy-four percent therefore fits the developed-economy pattern rather than an emerging primary-heavy structure.\n\nStudents should read that percentage as a development marker in the three-sector story, not as proof that industry or farming disappeared. Relative tertiary weight is what the figure signals.",
    # D
    "Seventy-four percent services aligns with a highly developed EU economy pattern in the chapter's stylised facts. It is the expected ballpark for advanced members.",
    # E
    "Rising relative importance of tertiary activity with development is exactly what a seventy-four percent service share illustrates in the sector model.",
]

EXPL["CASE 3.2.12"] = [
    # A
    "Meaningful GDP growth comparisons use inflation-adjusted figures so price rises alone do not masquerade as extra real production between years.",
    # B
    "Real GDP per capita can increase once nominal totals are adjusted for inflation and divided by population. Stripping prices reveals whether average real output rose.",
    # C
    "Real GDP removes general price changes so analysts can compare the volume of production across years. Nominal jumps that only reflect higher prices are filtered out.\n\nWithout that adjustment, a year of pure inflation could be mistaken for a boom. Real series exist precisely to separate price movements from quantity movements in the growth story.",
    # D
    "Nominal GDP can rise from inflation alone while real output is flat or falling. Nominal increases therefore do not always equal real economic growth.",
    # E
    "Ignoring inflation distorts year-to-year growth comparisons whenever prices move. Claiming that inflation never affects those comparisons is false.",
]

EXPL["CASE 3.2.13"] = [
    # A
    "Remote sessions sold abroad remain coaching services. Delivery channel and client location do not push the activity out of the tertiary sector.",
    # B
    "Exporting advice is still a service export, not secondary manufacturing. No materials are transformed into physical goods when the coach teaches online.",
    # C
    "Working from a home office does not make coaching primary. Primary means extracting or harvesting natural resources, not the desk or laptop in the trainer's room.\n\nRemote delivery is a mode of service provision. Home premises are a workplace setting, not evidence of farming, mining, or fishing. The Estonian coach still sells a tertiary service.",
    # D
    "Services produced domestically can enter GDP even when no physical goods cross borders. Intangible coaching exports still count as production in the accounts.",
    # E
    "Selling coaching sessions is tertiary service work for foreign clients. Home offices do not turn online training into primary extraction of natural resources.",
]

EXPL["CASE 3.2.14"] = [
    # A
    "Coal extraction at the Romanian mine is primary-sector activity: raw material taken from the ground before later industrial processing begins.",
    # B
    "Vehicle assembly at the Graz car plant transforms parts into finished cars. That manufacturing process is secondary-sector production for the plant's core output.",
    # C
    "Steel that began in mining does not pull car assembly back into the primary sector. Once materials enter a factory that builds vehicles, the plant's activity is secondary manufacturing.\n\nInput origin and current production stage are different questions. Mines stay primary; assemblers stay secondary even when they buy mined metals.",
    # D
    "Office staff support a mine or plant without reclassifying core extraction or assembly as tertiary services. Ancillary admin does not redefine the establishment's main sector.",
    # E
    "Employing office clerks does not make a coal mine or car plant tertiary. Core extraction or assembly still sets the sector label for each establishment.",
]

EXPL["CASE 3.2.15"] = [
    # A
    "Critics note that GDP misses some income and unpaid activity, which is one reason the measure's use is debated in teaching and policy discussions.",
    # B
    "Many barter swaps never appear in official books. Claiming every barter deal is always fully recorded in GDP overstates what statistical offices can capture.",
    # C
    "Unpaid owner maintenance on a home is typically outside GDP because no market transaction occurs. \"Always included\" is therefore wrong for ordinary do-it-yourself upkeep.\n\nPaid contractors' repairs would be counted; unpaid household labour of that kind usually is not. A homeowner painting their own hallway shows the gap clearly.",
    # D
    "Household volunteering and unpaid care largely sit outside GDP totals. Saying GDP fully captures them contradicts a standard limitation of the measure.",
    # E
    "Official GDP totals do not always count volunteering or unpaid care inside the home. Treating those activities as always recorded overstates what the accounts include.",
]

EXPL["CASE 3.2.16"] = [
    # A
    "Wheat farming can stay primary while an insurance branch provides tertiary claims services nearby. Different sectors routinely coexist in one locality.",
    # B
    "Serving customers does not make the farm tertiary. Harvesting wheat remains primary agriculture even though farmers sell grain and insurers sell policies.",
    # C
    "Claims handling at the insurance branch is a financial service in the tertiary sector. Covering \"basic risks\" does not convert that paperwork into primary extraction of natural resources.\n\nPrimary would be growing crops or mining deposits. Processing policy claims is service delivery, not harvesting wheat or digging ore from the ground.",
    # D
    "Harvesting wheat is primary. Later flour milling elsewhere is a separate secondary stage and does not reclassify the harvest itself as manufacturing.",
    # E
    "Wheat farming stays primary even if mills later turn grain into flour elsewhere. Downstream processing does not redefine the farm's own sector label.",
]

def main() -> None:
    data = json.loads(PATH.read_text())
    ids = [c["case_id"] for c in data[:32]]
    missing = [cid for cid in ids if cid not in EXPL]
    if missing:
        raise SystemExit(f"missing bodies for {missing}")
    extra = sorted(set(EXPL) - set(ids))
    if extra:
        raise SystemExit(f"extra bodies {extra}")
    for c in data[:32]:
        bodies = EXPL[c["case_id"]]
        if len(bodies) != 5:
            raise SystemExit(f"{c['case_id']}: need 5 bodies")
        expl = []
        for i, body in enumerate(bodies):
            if "—" in body:
                raise SystemExit(f"{c['case_id']} {chr(65+i)}: em dash")
            expl.append(wrap(body, bool(c["answer_key"][i])))
        c["tactical_explanations"] = expl
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"HAND Wrote explanations for {ids[0]} .. {ids[-1]} ({len(ids)} cases)")


if __name__ == "__main__":
    main()

