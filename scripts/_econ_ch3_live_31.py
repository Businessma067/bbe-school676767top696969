#!/usr/bin/env python3
"""Hand-crafted live-teacher explanations for CASE 3.1.01–3.1.16."""
from __future__ import annotations

REWRITES: dict[str, list[str]] = {
    "CASE 3.1.01": [
        """Labour is every human resource used in production — mental work included. Managers who set schedules are deploying that human input even when the same people also organise other factors. Coordination duty does not strip the effort out of the labour category.

Picture Tina and Steve’s weekend bench: the person who books the calls is still supplying labour while they juggle parts and risk. Human resources stay labour whether the task looks “managerial” or “manual.”

So the statement is True.""",
        """Insurance claims handlers processing policies are applying human skill to a service. Fuhrmann’s labour factor is all human resources, so a service firm’s desk work counts the same way a factory shift does.

Walk a claims queue: each file reviewed is labour input into the insurer’s offer. Intangible output does not eject the people from the labour box.

So the statement is True.""",
        """Labour is not a shop-floor-only label. Planners, accountants and other office roles supply human resources too. Restricting labour to manual work contradicts the book’s “all human resources” wording.

A Styrian winery’s cellar master and its bookkeeper are both labour; only the hillside vines sit under land. Excluding planners would hollow out half of modern production.

Note: labour covers mental and seasonal work as well as permanent manual roles.

So the statement is False.""",
        """Installing software is productive human work for a client — labour — not a household “want” in the Chapter 2 sense. Wants describe customer preferences; labour describes the human factor the firm combines.

When Tina and Steve spend an hour installing a licensed app, that hour is labour on the service ticket. Intangibility changes delivery, not the factor label.

So the statement is False.""",
        """Seasonal pickers still supply labour. Duration of the contract does not move human effort out of the labour factor. Fuhrmann’s definition covers permanent and temporary human resources alike.

Harvest week on a hillside is the classroom picture: short contracts, full labour input. Weeks on the roster do not demote pickers into some non-factor bin.

So the statement is False.""",
    ],
    "CASE 3.1.02": [
        """Hillside vineyards are natural resources in place — classic land. Soil, slope and the vines’ natural setting sit under Fuhrmann’s land factor before any bottle is filled.

The same estate’s leased bottling line is capital and the pickers are labour; the hillside itself stays land. Natural-resource character is what pins the label.

So the statement is True.""",
        """Seasonal pickers and the cellar master both apply human resources to wine output. Labour is not reserved for year-round payroll; harvest crews count.

On a Styrian harvest morning those two roles share the labour box while vines remain land and the press remains capital.

So the statement is True.""",
        """A leased bottling line still functions as capital. Capital covers machinery and plant used in production whether the winery holds title or rents the kit.

Ownership is not the test — use in production is. Hire the line for vintage week and it is capital on that run.

Note: leased tools remain capital.

So the statement is True.""",
        """Fermentation know-how applied to blending is knowledge sitting beside the four core factors. Fuhrmann lists knowledge and technology explicitly as resources that reshape how land, labour and capital combine.

The winemaker’s blending judgment is not “just labour hours” and not land; it is knowledge at work on the vintage.

So the statement is True.""",
        """Ordering barrels may allocate capital, but entrepreneurship is still present whenever someone organises factors and bears the risk that the vintage fails. Capital decisions do not erase the organising factor.

The owner who chooses barrel programmes, signs picker contracts and absorbs unsold stock is supplying entrepreneurship alongside those capital moves.

So the statement is False.""",
    ],
    "CASE 3.1.03": [
        """River water used to irrigate crops is a natural resource — land in course language. Water, soil and minerals sit under that factor when they enter production from nature.

An alpine meadow drawing irrigation from a stream is using land, not inventing a fifth box for “wet inputs.”

So the statement is True.""",
        """Timber already cut and ready for milling has left the pure land category. Standing forests are land; milled-ready logs are materials moving toward capital or intermediate-input logic.

If origin alone kept every wood product as land, oak barrels and cut boards would never leave the land box — and the book’s land definition would collapse.

So the statement is False.""",
        """Mineral rights attach to natural resource deposits — land — even when those rights can be bought and sold. Tradability does not convert land into capital.

Copper ore in the ground stays a natural-resource story; the mining firm’s drills are capital. Saleability of the rights does not flip the factor.

So the statement is False.""",
        """Oak barrels are produced means of production — capital — not land. Oak trees in a forest can be land; once wood is coopered into barrels for ageing wine, you have left natural-resource land.

A Styrian cellar stacked with barrels is running capital through the wine, not planting a forest indoors.

So the statement is False.""",
        """Land is not limited to fenced factory pads. Forests, fisheries, minerals and water sites with natural character all sit under land in Fuhrmann’s list.

AT&S’s site matters, but so do vineyards and fishing grounds elsewhere in the economy. “Fenced plot only” is far too narrow.

Note: land = natural resources, not merely deeded factory yards.

So the statement is False.""",
    ],
    "CASE 3.1.04": [
        """Leased diagnostic tools used by technicians are capital. Capital includes equipment deployed in production whether owned or hired.

Tina and Steve’s licensed scanner on a weekend call is capital on that ticket even though a lessor holds title.

So the statement is True.""",
        """Spare parts held for same-day repairs are inventories supporting operations — capital in this course’s wording. They are produced resources kept ready for service delivery.

A shelf of screens and batteries is not land and not labour; it is capital waiting for the next fault.

So the statement is True.""",
        """Fuhrmann’s capital list is explicit: machinery, plant, vehicles and financial resources used to operate. That is the factor definition, not a metaphor.

Presses, vans, clean rooms and cash for payroll all sit together under capital when they keep production running.

So the statement is True.""",
        """Cash reserves held to finance payroll between invoices are financial resources used in operations — capital. Working capital is not a separate mystery factor.

Without that buffer, labour cannot be paid and the service stops. Money used to operate belongs with capital.

Note: capital includes financial resources, not only machines.

So the statement is True.""",
        """Delivery vans that ship finished goods are vehicles used in production and distribution — capital on Fuhrmann’s list. The wheels are means of getting output to customers.

A Graz workshop’s van is capital beside the sewing machines, not a land input because it parks on asphalt.

So the statement is True.""",
    ],
    "CASE 3.1.05": [
        """Tools and testing gear on a manufacturing line are capital in secondary production. They are produced means of production transforming materials into goods.

AT&S-style plant equipment sits squarely in capital while engineers supply labour and leadership organises risk.

So the statement is True.""",
        """Engineers monitoring quality supply specialised labour — human resources with skill. Labour is not limited to repetitive manual tasks.

Quality walks beside operators on the shift; both roles feed the labour factor.

So the statement is True.""",
        """Plant management that coordinates materials, staff and orders is doing entrepreneurship: bringing factors together and carrying business risk if schedules fail.

Choosing which orders to prioritise and absorbing the cost of a missed shipment is organising-and-risk work, not merely another labour hour.

So the statement is True.""",
        """Materials such as refined copper already extracted are not “land” just because copper ore once sat in the earth. Land is the natural-resource stage; process materials on a line follow capital/materials logic.

If origin forever locked every input as land, secondary manufacturing would have no distinct resource story — and the book separates the stages.

So the statement is False.""",
        """Knowledge remains a production factor whether or not patents are filed. Fuhrmann places knowledge and technology beside the core factors; registration paperwork is not the gate.

Fermentation know-how or process recipes still reshape how capital and labour combine even when unpublished.

So the statement is False.""",
    ],
    "CASE 3.1.06": [
        """Entrepreneurship is the organising factor that brings land, labour and capital together so production can happen. Without it, the other resources sit idle or misaligned.

Tina and Steve deciding which repairs to advertise and which parts to stock are living that organising role on a small scale.

So the statement is True.""",
        """Entrepreneurs bear uncertainty about whether the plan pays; lenders share some financial risk but do not monopolise it. Fuhrmann ties entrepreneurship to bringing factors together and carrying business risk.

Founders still eat the loss if the vintage or the repair shop fails — that is not “lenders only.”

So the statement is False.""",
        """Financial resources are capital, not entrepreneurship. Entrepreneurship is the organising-and-risk factor; cash and credit are resources that factor organises.

Mixing “both involve decisions” collapses two distinct boxes Fuhrmann keeps apart.

Note: money used to operate = capital; organising that money under risk = entrepreneurship.

So the statement is False.""",
        """Hiring staff adds labour; it does not delete entrepreneurship. Someone still coordinates the mix and bears residual risk after payroll is set.

A Graz tailor who hires apprentices still supplies entrepreneurship when choosing machines and orders.

So the statement is False.""",
        """Selecting equipment is partly a capital allocation, but the choice under uncertainty is entrepreneurial when the owner organises production and risks a bad bet. Capital purchase alone is not the whole story — and it does not prove entrepreneurship is absent.

Signing a hire-purchase for sewing machines while staking the workshop’s future is entrepreneurship guiding capital.

So the statement is False.""",
    ],
    "CASE 3.1.07": [
        """Diagnostic software licences on a repair bench are technology in a service firm. Fuhrmann lists knowledge and technology among the resources businesses combine.

Tina and Steve’s licensed app is not “only labour”; it is technology reshaping how labour and capital fix machines.

So the statement is True.""",
        """Fermentation experience applied to blending is knowledge contributing to output. Knowledge sits beside land, labour, capital and entrepreneurship rather than replacing them.

The winemaker’s judgment changes how vines and vats combine — classic knowledge-as-factor.

So the statement is True.""",
        """Technology at a repair bench counts as a production factor in services just as process tech does in manufacturing. Sector does not eject technology from the resource mix.

A scanner guiding a screen replacement is technology in tertiary work.

So the statement is True.""",
        """Technology is not reserved for hardware manufacturers. Service firms use software, diagnostics and tools as technology factors every day.

If only physical hardware makers could claim technology, Tina and Steve’s licences would vanish from the map — Fuhrmann does not draw that fence.

So the statement is False.""",
        """Design know-how is knowledge (and often technology when tool-embedded), not capital merely because files sit on servers. Capital is machinery, plant, vehicles and financial resources; know-how is listed separately.

Server hardware can be capital; the design judgment stored there is knowledge.

So the statement is False.""",
    ],
    "CASE 3.1.08": [
        """A small IT-support venture typically combines knowledge, labour, technology, capital and entrepreneurship on every ticket — exactly Fuhrmann’s wide mix, not a single-factor shop.

Tina and Steve’s vignette in the book is this picture: skills, tools, parts, coordination and risk on one weekend call.

So the statement is True.""",
        """Coordinating bookings, parts orders and repairs is entrepreneurship: organising the other factors and carrying the risk that a weekend slot fails.

The founder who sequences the day is not merely “more labour”; they are running the venture’s organising factor.

So the statement is True.""",
        """Repair kits and licensed diagnostic apps form the technology layer of the offer. Technology sits with knowledge beside the core four factors.

Without those tools, labour alone cannot deliver the same service quality.

So the statement is True.""",
        """Spare screens and batteries held for repairs are capital inventories supporting service delivery. They are produced resources ready for use.

A parts drawer is capital waiting beside the labour that will fit the screen.

Note: inventories used to operate count with capital.

So the statement is True.""",
        """Staff time spent diagnosing faults is labour — human resources applied to the service. Diagnosis is mental work and still labour under the book’s definition.

Hours on the fault tree are labour hours, whether or not a founder also supplies entrepreneurship for the venture.

So the statement is True.""",
    ],
    "CASE 3.1.09": [
        """Service firms combine labour with capital, technology and entrepreneurial coordination — they are not “labour-only” shops. Fuhrmann’s opening point is that businesses combine different factors.

Tina and Steve need tools, licences, cash and risk-bearing alongside hours at the bench.

So the statement is True.""",
        """A business is an entity that offers goods and/or services by combining factors of production. That is the book’s starting definition for Chapter 3.1.

Whatever the sector, the resource mix is how the offer gets made.

So the statement is True.""",
        """Dominance of one factor does not erase the others. A knowledge-heavy studio still uses capital and entrepreneurship; a land-heavy vineyard still needs labour and kit.

“Dominant” describes emphasis, not a licence to drop the rest of Fuhrmann’s list.

So the statement is False.""",
        """Services combine factors too — labour plus capital, technology and entrepreneurship. Manufacturing has no monopoly on multi-factor mixes.

Technical support without tools, licences or founder coordination is a fantasy shop.

So the statement is False.""",
        """Automation changes the labour mix; it does not delete labour or knowledge from manufacturing. Engineers, supervisors and process know-how remain, and entrepreneurship still organises the line.

AT&S-style plants run heavy capital with skilled labour and technology — not capital alone.

So the statement is False.""",
    ],
    "CASE 3.1.10": [
        """Oak barrels held for ageing are capital in the wine process — produced means of production supporting output. They are not land just because oak grew in forests.

Cellar stacks of barrels are capital working beside labour and vines.

So the statement is True.""",
        """Fermentation experience adds knowledge alongside land, labour, capital and entrepreneurship. Knowledge reshapes how those factors combine on the vintage.

Blending judgment is the knowledge layer on top of the hillside and the press.

So the statement is True.""",
        """Fuhrmann’s own winemaker example combines land, labour, capital and entrepreneurship — and often knowledge and technology too. Large vineyards make the land factor vivid without ejecting the rest.

That integrated mix is the point of the subsection.

So the statement is True.""",
        """Vineyard soil fertility is land; bottling machinery at the same estate is capital. Natural resource versus produced means of production — two labels on one site.

Same postcode, different factors. That split is what classification tasks train.

Note: site soil ≠ installed machines.

So the statement is True.""",
        """Seasonal staff supply labour just as permanent employees do. Contract length does not remove human resources from the labour factor.

Harvest pickers are labour in the busiest week of the year.

So the statement is False.""",
    ],
    "CASE 3.1.11": [
        """Entrepreneurship and capital are different factors: capital is the resources used; entrepreneurship organises them and bears risk. Mixing the labels collapses Fuhrmann’s list.

Cash for a bottling line is capital; choosing to install it under uncertainty is entrepreneurship.

So the statement is True.""",
        """Planning hours are labour — human resources applied to coordination tasks — not capital merely because notes sit in a digital file. Capital is machinery, plant, vehicles and financial resources.

If every spreadsheet turned planning into capital, labour would vanish from office work. The book refuses that swap.

So the statement is False.""",
        """An owner-operator can supply labour with their hands and entrepreneurship with their risk-bearing coordination on the same day. The factors can stack in one person.

Repairing a laptop (labour) while owning the shop’s downside (entrepreneurship) is a normal small-firm split.

So the statement is True.""",
        """Founder coordination of suppliers and staff is entrepreneurship distinct from task-level labour. Organising the mix and carrying residual risk is the enterprise factor.

Booking suppliers and sequencing apprentices is not “just more stitching time.”

So the statement is True.""",
        """Risk-bearing is entrepreneurship, not labour, even though it consumes attention. Labour is human resources applied to production tasks; entrepreneurship is organising factors under uncertainty.

Hours spent worrying do not re-label risk as labour.

So the statement is False.""",
    ],
    "CASE 3.1.12": [
        """A leased bottling line is capital for the winery while it runs. Use in production, not ownership papers, decides the capital label.

Vintage week on hired kit is still capital on the floor.

So the statement is True.""",
        """Leased warehouse robots beside manual pickers are capital in a distribution hub. Hired automation is still machinery used to operate.

Lease versus buy changes the finance story, not the factor box.

So the statement is True.""",
        """Renting premises does not erase installed tools from capital. Equipment used in production remains capital whether the building is leased or owned.

A hired workshop full of hire-purchase machines is capital-dense, not capital-empty.

So the statement is False.""",
        """Hire-purchase machines are capital, not land. Standing in a workshop does not turn equipment into a natural resource.

Land would be a quarry or forest; the sewing machine is produced capital.

So the statement is False.""",
        """Seasonal outdoor leases do not convert machinery into land. Harvesters working in a forest remain capital; the standing timber resource is the land story.

Terrain of use is not the factor test.

Note: capital can operate on land without becoming land.

So the statement is False.""",
    ],
    "CASE 3.1.13": [
        """Crew members running chainsaws and harvesters supply labour — human resources in primary extraction. Forestry work is still labour under Fuhrmann’s definition.

Mountain crews before winter closes access are labour on land, with capital in the machines.

So the statement is True.""",
        """Supervision can be labour, but extraction ventures also need entrepreneurship when someone organises crews, leases harvesters and bears the risk of a failed season. “Never entrepreneurship” is too absolute.

The contractor who stakes the winter window is supplying enterprise alongside any labour hours.

So the statement is False.""",
        """Logging uses land (forest resource), labour (crews), capital (harvesters) and entrepreneurship (organising the cut). Trees growing naturally do not make land the only factor.

A single-factor forest firm is a fiction against the book’s combine-factors opening.

So the statement is False.""",
        """Harvesters are capital even when they roll on forest terrain. Machines used to extract timber are produced means of production.

The forest is land; the harvester is capital. Shared location does not merge the labels.

So the statement is False.""",
        """Forests remain land as natural resources; cutting the first tree does not redefine the standing resource as capital. Harvested logs become materials; the woodland resource category stays land until transformed.

Capital is the harvester and related kit, not the forest renaming itself at first cut.

So the statement is False.""",
    ],
    "CASE 3.1.14": [
        """Working capital that finances payroll between invoices is a financial capital input. Fuhrmann includes financial resources inside capital.

Without that buffer, labour cannot be paid and output stops — money used to operate is capital.

So the statement is True.""",
        """Funds borrowed to buy diagnostic tools are capital applied to production once used that way. The financing source does not eject the resources from capital.

Borrowed cash that becomes a scanner is still capital on the bench.

So the statement is True.""",
        """Capital covers both physical equipment and financial resources used in production. That dual wording is explicit in the book’s factor list.

Vans and payroll cash share the capital box when they keep operations alive.

So the statement is True.""",
        """Share capital is one financing form, not the only capital a manufacturer may use. Operating cash, loans and equipment all sit under capital as used in production.

Limiting capital to share capital alone would erase working capital and plant from the factor map.

So the statement is False.""",
        """Emergency cash is financial capital, not land, even if the safe sits on business premises. Location of storage does not turn money into a natural resource.

Land is forests and minerals; the cash buffer is capital.

Note: premises ≠ the factor label of what is stored there.

So the statement is False.""",
    ],
    "CASE 3.1.15": [
        """Labour is all human resources — service staff included. Restricting labour to manufacturing floor workers contradicts Fuhrmann’s definition and would erase banking, coaching and support work from the factor map.

Tina and Steve’s support hours are labour in a service firm. Floor-only labour is the trap wording.

So the statement is False.""",
        """Technical support staff troubleshooting home networks supply labour. Human skill applied to a service is the labour factor in tertiary work.

A remote fix session is labour on the ticket, not a non-factor because nothing tangible ships.

So the statement is True.""",
        """Freelance trainers delivering coaching supply labour to the organising studio. Contract form does not remove human resources from labour.

The studio still combines that labour with capital, technology and entrepreneurship around the session.

So the statement is True.""",
        """Human skills used to install software for a client are labour. Installation effort is productive human input into the service offer.

Licences may be technology; the installer’s time is labour.

So the statement is True.""",
        """Labour covers specialists and general staff alike whenever human resources are deployed. Skill level changes the wage story, not the factor box.

Engineers and apprentices share labour; entrepreneurship and capital sit beside them.

Note: specialised ≠ non-labour.

So the statement is True.""",
    ],
    "CASE 3.1.16": [
        """Fabric purchased for client orders is a material input combined with labour and machines in the workshop. Tailoring is a multi-factor craft, not cloth alone.

The Graz tailor’s bolts sit ready for apprentices and hire-purchase machines to transform.

So the statement is True.""",
        """Selecting machines and scheduling orders is entrepreneurship: organising capital and labour under the risk that demand disappoints.

Hire-purchase signatures and apprenticeship plans are enterprise decisions, not mere shopping.

So the statement is True.""",
        """Apprentices cutting patterns and stitching garments supply labour — human resources in production. Training status does not eject them from labour.

Two apprentices at the table are labour beside the tailor’s own hours.

So the statement is True.""",
        """Designs in the tailor’s head are knowledge; they do not make labour the only factor. Machines, fabric, cash and entrepreneurial coordination still belong in the mix.

A head full of patterns without capital or labour cannot ship jackets.

So the statement is False.""",
        """Machines on hire-purchase are capital, not land, even though they occupy floor space. Occupying a workshop does not convert equipment into a natural resource.

The room’s footprint is not the factor test — produced means of production are capital.

So the statement is False.""",
    ],
}
