#!/usr/bin/env python3
"""Statement-only ch3 cases [0:32]."""
from __future__ import annotations
import json, re
from pathlib import Path
PATH=Path("/workspace/src/data/economics-cases-ch3-subtopics.json")
START,END=0,32

def wrap(body, truth):
    body=body.replace("\u2014",", ").replace("\u2013","-").strip()
    body=re.sub(r"\n{3,}","\n\n",body)
    return f"{body}\n\nSo the statement is {'True' if truth else 'False'}."

EXPL={}
EXPL['CASE 3.1.01'] = [
    "Managers who set rotas and keep a shift moving are still supplying labour. Coordination is mental work performed by people, so it sits in the human-resources factor rather than outside production.",
    "Claims handlers who process policies are doing service work with their time and skill. In an insurer that is labour just as clearly as a welder's hours on a shop floor.",
    "Labour is every human resource applied to production: planners, accountants, and supervisors as well as manual crews. Limiting the word to shop-floor muscle alone cuts out half of what firms actually hire people to do.\n\nA planner who sequences orders and an accountant who tracks costs are both scarce human inputs. Calling only the warehouse loader \"labour\" would leave those roles unclassified even though output depends on them.",
    "Installing software is a service activity people perform; intangibility does not turn it into a consumer want. The technician's hours are labour used to deliver that service.",
    "Seasonal pickers are still labour while they work the harvest. Short contracts change duration, not the factor label. Rejecting \"Seasonal pickers fall outside labour because their employment lasts only weeks\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.1.02'] = [
    "Hillside vineyards are natural resources tied to location and soil. That is the land factor for the Styrian winery, not a machine or a wage bill.",
    "Pickers in season and the cellar master both apply human effort to grapes and wine. Different skill levels do not split them into different factors; both are labour.",
    "A bottling line the winery leases still helps produce bottles today. Ownership is secondary: capital is the produced means used in production, including hired equipment.",
    "Blending with fermentation know-how uses knowledge as an input beside grapes and tanks. Experience that improves the mix is part of what the winery produces with, not a free leftover.",
    "Ordering barrels is a capital choice about ageing gear, but someone still has to decide which barrels, when, and at what risk. That organising decision is entrepreneurship; buying wood does not erase it.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Barrel orders are capital decisions, so entrepreneurship is absent\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
]

EXPL['CASE 3.1.03'] = [
    "Irrigation water drawn from a river is a natural resource used on the crop. Under the land factor that is exactly the kind of gift-of-nature input the chapter lists.",
    "Timber already cut and ready for milling has left the standing-forest stage. At that point it is a produced or intermediate material in the production chain, not \"land\" merely because trees once grew it.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Timber ready for milling is land because it originates from trees\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
    "Mineral rights can be traded, yet what they grant access to is a natural deposit. Tradability does not flip land into capital; many land rights are bought and sold without becoming machines.",
    "Oak barrels are manufactured ageing vessels. Forest origin of the wood does not make the finished barrel a land input; capital covers such produced equipment.",
    "Land covers forests, fisheries, minerals, and water as well as fenced sites. Narrowing it to factory plots alone drops the natural-resource half of the factor.",
]

EXPL['CASE 3.1.04'] = [
    "Diagnostic tools a firm leases still help technicians deliver repairs. Capital is about use in production, not about holding the title deed.",
    "Spare parts kept for same-day fixes are stock that supports service output. That inventory is capital tied to operations, not a consumer purchase.",
    "Plant, machines, vehicles, and the finance that keeps them running are the classic capital bundle. The statement lists those operational means correctly.",
    "Cash held to bridge payroll until invoices clear is financial capital. Without that buffer the shift cannot be paid even if machines sit ready.\n\nPhysical tools and money balances both enable production; treating only steel as capital would leave the wage float unexplained. The chapter therefore counts financial resources used in operations as capital too.",
    "Delivery vans that move finished goods are produced means of distribution. They belong with capital, not with land or raw entrepreneurship labels.",
]

EXPL['CASE 3.1.05'] = [
    "Tools and testers on the line are produced equipment used to make goods. In secondary production that is capital on the floor. Keeping the label on \"Production tools and testing equipment on the line are capital in secondary production\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Production tools and testing equipment on the line are capital in secondary production\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Engineers who watch quality apply specialised human skill. That monitoring work is labour even when it is technical rather than manual. Keeping the label on \"Engineers monitoring product quality supply specialised labour\" matches how the case uses those words in production.",
    "Managers who combine materials, staff, and orders are organising production under uncertainty. That combining role is entrepreneurship for the plant.",
    "Copper may be mined from the earth, but once it is purchased material on a manufacturing shift it is an intermediate input, not the land factor itself. Calling every mined substance \"land\" at the factory stage confuses extraction with processing.",
    "Know-how used on the shift is already a production factor. Patent paperwork can protect it later; registration is not what makes knowledge productive.",
]

EXPL['CASE 3.1.06'] = [
    "Entrepreneurship is the organising act that brings land, labour, and capital into one production plan. Without that combining role the other factors stay idle side by side.",
    "Entrepreneurs carry business uncertainty about demand, costs, and timing. Lenders take credit risk, but that does not empty the founder's residual risk of running the venture.",
    "Financial resources are capital. Decision-making about how to use them is entrepreneurship; sharing the word \"business\" does not merge the two factors.",
    "Hiring staff is itself an entrepreneurial organising step. Once people are hired, their hours are labour, but the choice to hire and how to deploy them remains entrepreneurship rather than vanishing into the wage bill.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Hiring staff converts all coordination into labour with no entrepreneurship left\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
    "Choosing which equipment to buy is a capital allocation nested inside entrepreneurial planning. Picking machines does not cancel the organising factor; it is one of the decisions that factor makes.",
]

EXPL['CASE 3.1.07'] = [
    "Licensed diagnostic software that technicians run is technology applied in a service job. It is a production input even though no physical gadget is manufactured on site.",
    "Fermentation experience that improves wine is knowledge baked into output. The cellar does not run on grapes and tanks alone. Keeping the label on \"Experience with fermentation techniques contributes knowledge to winemaking output\" matches how the case uses those words in production.",
    "A repair bench that uses diagnostic tech still sits in a service firm. Technology counts as a factor there just as it does in a factory. Keeping the label on \"Technology used at a repair bench counts as a production factor in a service firm\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Technology used at a repair bench counts as a production factor in a service firm\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Manufacturing hardware is one place technology appears, not the only one. Service desks, clinics, and repair shops use technology without stamping metal.",
    "Design know-how may be stored on servers, but storage media do not turn knowledge into capital equipment. The productive content is the know-how itself, kept distinct from the machines that hold files.",
]

EXPL['CASE 3.1.08'] = [
    "Weekend laptop repair pulls knowledge, staff hours, tools, apps, and owner coordination into one offer. That mix is exactly several factors working together.",
    "Booking jobs, ordering parts, and sequencing repairs is organising under uncertainty. That is entrepreneurship for the small IT venture. Keeping the label on \"Coordinating bookings, parts orders, and repairs supplies entrepreneurship\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Coordinating bookings, parts orders, and repairs supplies entrepreneurship\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Repair kits plus licensed diagnostic apps are the technology layer clients pay for. They sit beside labour rather than replacing the need for a technician.",
    "Spare screens and batteries on the shelf are capital held for repair jobs. Stock ready for swaps keeps the workshop able to finish tickets the same day.",
    "Time spent finding faults is human effort sold to the client. That is the labour input of the repair weekend. Keeping the label on \"Staff time spent diagnosing faults counts as the labour input for the repair venture\" matches how the case uses those words in production.",
]

EXPL['CASE 3.1.09'] = [
    "A consultancy still needs laptops, software, and someone who wins and schedules work. Services combine labour with capital, technology, and entrepreneurship rather than floating on wages alone.",
    "Any business that sells goods or services does so by combining production factors. The statement restates that combining role without inventing a one-factor shortcut.",
    "Even when one factor dominates cost shares, the others remain necessary. A software firm heavy on knowledge still needs capital devices and entrepreneurial scheduling; dominance is not substitution to zero.\n\nTreating the largest cost line as the only factor would erase rented offices, paid staff, or founder coordination whenever another input looks bigger on the spreadsheet. Production needs the bundle.",
    "Services hire people and also use tools, premises, and organising decisions. Manufacturing has no monopoly on factor combinations. Rejecting \"Only manufacturing combines factors; services use labour alone\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Automation changes the labour mix; it does not delete human oversight, maintenance knowledge, or programming that keeps the line alive. Manufacturing still uses labour and knowledge beside robots.",
]

EXPL['CASE 3.1.10'] = [
    "Oak barrels used to age wine are produced equipment in the cellar. That is capital supporting the process until bottling. Keeping the label on \"Oak barrels held for ageing wine are capital supporting the production process\" matches how the case uses those words in production.",
    "Fermentation experience sits beside grapes, labour, and tanks. Knowledge is an extra factor in the same winery, not a poetic label for luck.",
    "Large vineyards plus hired hands, gear, and owner decisions show land, labour, capital, and entrepreneurship in one business. Scale makes the bundle visible rather than inventing new factors.",
    "Soil fertility is land; the bottling machine on the same estate is capital. Sharing a site does not force one factor label onto both. Keeping the label on \"Vineyard soil fertility is land; bottling machinery at the same site is capital\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Vineyard soil fertility is land; bottling machinery at the same site is capital\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Seasonal staff supply labour while they pick and process. Permanence of contract is not what creates the labour factor. Rejecting \"Only permanent employees supply labour; seasonal staff are excluded\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.1.11'] = [
    "Capital is the resources used; entrepreneurship is the organising of those resources. Keeping the two names separate is the point of the statement.",
    "A plan saved as a file is not capital in the equipment sense. Planning hours are labour or entrepreneurship depending on the role, not \"capital\" because bits sit on a disk.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Every planning hour is capital because plans are stored digitally\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
    "An owner who also tightens screws supplies labour with their hands and entrepreneurship with their organising role. One person can wear both factor hats in a small shop.",
    "Founders who align suppliers and staff are doing entrepreneurship even when they never touch the repair bench. Task work and organising work are separable.",
    "Bearing residual business risk is the entrepreneurial burden. Clocking hours of worry does not convert that risk into ordinary labour services.",
]

EXPL['CASE 3.1.12'] = [
    "A leased bottling line still bottles wine for the winery. Lease versus buy changes the finance path, not the capital function of the machine.",
    "Warehouse robots on lease work beside pickers as produced means of handling goods. They are capital in the hub regardless of who holds title.",
    "Renting the building does not empty the workshop of capital. Tools and lines installed or brought in still count as capital while they produce.",
    "Hire-purchase machines are equipment being paid over time. Standing on a workshop floor does not turn them into land. Rejecting \"Hire-purchase machines are land because they stand in a workshop\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Outdoor seasonal use does not rebrand machinery as land. Location of work is not the factor test; produced means remain capital. Rejecting \"Seasonal leases turn machinery into land because work happens outdoors\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Seasonal leases turn machinery into land because work happens outdoors\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
]

EXPL['CASE 3.1.13'] = [
    "Crew who run chainsaws and harvesters are supplying labour in the forest. Operating the machines is human work layered on capital gear. Keeping the label on \"Crew members operating chainsaws and harvesters supply labour\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Crew members operating chainsaws and harvesters supply labour\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Supervision can include entrepreneurial organising of crews and cuts, not only paid labour hours. Extraction firms still need someone who commits resources under uncertainty.",
    "Trees are land-based natural resources, but logging also needs labour, harvesters, and organising decisions. Land alone does not fell and load timber.",
    "Harvesters are capital equipment used on forest land. Terrain does not swallow the machine into the land factor. Rejecting \"Harvesters are land because they operate on forest terrain\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Cutting a tree does not convert the forest into capital. Capital is produced means; the standing woodland remains a natural resource until transformed further down the chain.",
]

EXPL['CASE 3.1.14'] = [
    "Cash that covers wages between invoice payments is working capital. Production stops socially if payroll cannot clear even when machines are fine.",
    "Borrowed money spent on diagnostic tools becomes capital applied to service output. The loan finances capital; it does not create a separate mystery factor.",
    "Capital covers both physical gear and the financial resources that fund operations. The chapter's wide capital notion is what the statement records.",
    "Manufacturers use loans, retained earnings, and trade credit as well as share issues. Share capital is one channel, not the only allowed form.",
    "Emergency cash is a financial balance, not land. Storing notes in a safe on site does not turn money into a natural resource. Rejecting \"Emergency cash is land because it is stored on business premises\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Emergency cash is land because it is stored on business premises\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
]

EXPL['CASE 3.1.15'] = [
    "Service staff are labour whenever human skill delivers the service. Excluding them would empty hospitals, banks, and helpdesks of their main factor.",
    "Support technicians who fix home networks sell their time and skill. That is labour in a pure service setting. Keeping the label on \"Technical support staff troubleshooting home networks supply labour\" matches how the case uses those words in production.",
    "Freelance coaches hired by a studio still supply labour to the session even if they are not on payroll. The organising studio buys human input either way.",
    "Installing software for a client is human work performed as a service. Those hours are labour regardless of the intangible result. Keeping the label on \"Human skills used to install software for a client count as labour\" matches how the case uses those words in production.",
    "Specialists and general staff are both labour when deployed as human resources. Skill grade changes the wage, not the factor box. Keeping the label on \"Labour covers specialists and general staff alike when human resources are deployed\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Labour covers specialists and general staff alike when human resources are deployed\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
]

EXPL['CASE 3.1.16'] = [
    "Fabric bought for orders is material combined with cutting labour and machines. The Graz workshop runs on that bundle, not on thread alone. Keeping the label on \"Fabric purchased for client orders is a material input combined with labour and machines\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Fabric purchased for client orders is a material input combined with labour and machines\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Choosing machines and scheduling client orders is entrepreneurial organising for the tailor. Stitching skill does not replace that planning role.",
    "Apprentices who cut and stitch supply labour while they learn. Their hours are part of garment production. Keeping the label on \"Apprentices cutting patterns and stitching garments supply labour\" matches how the case uses those words in production.",
    "Designs in the tailor's head are knowledge; fabric, machines, and premises are still required. Labour-plus-ideas is not a one-factor workshop.",
    "Hire-purchase sewing machines are capital being paid off. Floor space occupancy does not reclassify them as land. Rejecting \"Machines on hire-purchase are land because they occupy workshop space\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.2.01'] = [
    "Pulling ore from the ground is primary; turning it into metal ingots is secondary processing. The statement keeps extraction and smelting in the right sectors.",
    "Banking, insurance, and coaching are service activities. They sit in the tertiary sector in the three-sector model. Keeping the label on \"The tertiary sector comprises services such as banking, insurance, and coaching\" matches how the case uses those words in production.",
    "Farming, fishing, mining, and forestry extract raw materials. That list is the primary sector's core. Keeping the label on \"The primary sector covers farming, fishing, mining, and forestry extracting raw materials\" matches how the case uses those words in production.",
    "Banking and insurance meet important needs but they are services, not primary extraction. \"Basic\" in everyday speech is not the sector test.",
    "Secondary activity is manufacturing and processing, not the delivery of bank or insurance services. Those services are tertiary. Rejecting \"The secondary sector delivers banking and insurance services to households\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"The secondary sector delivers banking and insurance services to households\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
]

EXPL['CASE 3.2.02'] = [
    "Lift passes and ski lessons are services sold to guests. At a Tyrolean resort that is tertiary output. Keeping the label on \"Selling lift passes and ski instruction are tertiary services\" matches how the case uses those words in production.",
    "Instructors supply labour on the slopes. Teaching is human work, not a capital good, even when snow is the backdrop. Rejecting \"Instructors supply capital because they teach on mountain slopes\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Making skis on site would be manufacturing, hence secondary. Guest experience does not pull fabrication into the tertiary box. Rejecting \"Manufacturing skis on site would remain tertiary because guests consume the experience\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Manufacturing skis on site would remain tertiary because guests consume the experience\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
    "Snow is natural, but selling hospitality and lessons is a service. Primary extraction would be mining or harvesting resources, not staffing a resort desk.",
    "A mountainside location does not force primary classification. Sector turns on the activity (services), not on altitude. Rejecting \"The resort belongs to the primary sector because it operates on a mountainside\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.2.03'] = [
    "A coal mine that extracts ore is classic primary activity. Removal of natural material defines the sector here. Keeping the label on \"A coal mine extracting ore belongs to the primary sector\" matches how the case uses those words in production.",
    "Growing olives and pressing oil on the farm stays inside agricultural primary work when the farm is extracting and first-processing its crop in that agricultural frame.",
    "Forestry concessions that supply logs are primary. The timber starts as a natural-resource harvest. Keeping the label on \"Forestry concessions supplying logs to mills belong to the primary sector\" matches how the case uses those words in production.",
    "Turning logs into export boards at a mill is manufacturing. That secondary step begins after primary extraction. Keeping the label on \"Milling logs into export boards at a timber mill is secondary manufacturing\" matches how the case uses those words in production.",
    "Commercial herring landings are primary extraction from the sea. Sale of the catch does not move the fishing into tertiary by itself. Keeping the label on \"Commercial fishing that lands herring for sale is primary-sector extraction\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Commercial fishing that lands herring for sale is primary-sector extraction\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
]

EXPL['CASE 3.2.04'] = [
    "Selling finished jackets in a shop is trade or retail service. That distribution step is tertiary once manufacturing is done. Keeping the label on \"Retail sale of finished jackets is tertiary distribution or trade\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Retail sale of finished jackets is tertiary distribution or trade\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Warehousing steel before welding is a logistics service supporting production. In the three-sector cut that support activity is tertiary even when the customer is a factory.",
    "Assembling cars is secondary manufacturing. Serving customers later does not drag the plant into the tertiary sector while it builds vehicles.",
    "Sewing jackets is manufacturing. Later retail does not rewrite the sewing stage as tertiary. Rejecting \"A fashion label sewing jackets performs tertiary retail because jackets are sold later\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Smelting shapes metal after extraction; that processing is secondary. Ore's underground origin does not freeze every later stage as primary.",
]

EXPL['CASE 3.2.05'] = [
    "Repair waves after floods can lift measured GDP through construction and replacement spending. The meter can rise while the place is worse off in welfare terms.",
    "Bridge rebuild invoices enter GDP as production of construction services and structures. Those spendings are counted when they occur. Keeping the label on \"Construction spending on bridge rebuilds is included in GDP measurement\" matches how the case uses those words in production.",
    "Higher rebuild GDP can sit beside lower wellbeing if people lost homes and calm. The statement separates the statistical rise from welfare. Keeping the label on \"Rebuild spending can raise measured GDP while citizen wellbeing falls\" matches how the case uses those words in production.",
    "GDP adds the monetary value of final goods and services produced inside the border. That is the definition the letter uses. Keeping the label on \"GDP reflects monetary value of final goods and services produced within national borders\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"GDP reflects monetary value of final goods and services produced within national borders\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Rebuild activity can raise GDP without restoring wellbeing one-for-one. Equating the two after disasters confuses a production meter with quality of life.",
]

EXPL['CASE 3.2.06'] = [
    "Loan desks in bank branches are financial services. They belong in the tertiary sector. Keeping the label on \"Banking branches providing loans perform tertiary financial services\" matches how the case uses those words in production.",
    "Coaching sold remotely to foreign clients is still a service export. Distance does not invent a new sector. Keeping the label on \"Remote coaching sessions sold to foreign clients are tertiary services\" matches how the case uses those words in production.",
    "Smelting ore into ingots on site is secondary manufacturing. The statement places that process correctly beside service examples. Keeping the label on \"Smelting metal ingots from ore on site is secondary manufacturing\" matches how the case uses those words in production.",
    "Home-network helpdesks sell troubleshooting services. That is tertiary work. Keeping the label on \"Software helpdesks troubleshooting home networks provide tertiary services\" matches how the case uses those words in production.",
    "Insurance claims processing is a financial service, not digging or harvesting. Primary extraction does not describe claim files. Rejecting \"Insurance cooperatives processing claims provide primary extraction services\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Insurance cooperatives processing claims provide primary extraction services\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
]

EXPL['CASE 3.2.07'] = [
    "When many workers are still in farming, the primary sector dominates employment. That pattern marks less developed structures in the model. Keeping the label on \"Heavy farming employment in less developed countries signals primary-sector dominance\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Heavy farming employment in less developed countries signals primary-sector dominance\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "As economies develop, primary employment and output shares usually fall relative to industry and services. The statement records that typical shift.",
    "Emerging economies usually keep larger primary shares than advanced EU services economies. The claim that they already show smaller primary shares reverses the usual comparison.",
    "Tertiary shares above seventy percent are typical of advanced service economies, not of most emerging structures still heavy in farming or early industry.",
    "Advanced service dominance above seventy percent describes highly developed patterns. Most emerging economies have not yet locked in that tertiary weight.",
]

EXPL['CASE 3.2.08'] = [
    "Making electronic components transforms materials into parts. That fabrication is secondary manufacturing. Keeping the label on \"Fabricating electronic components transforms materials and therefore belongs to secondary manufactur\" matches how the case uses those words in production.",
    "An olive farm that harvests and presses remains primary agricultural activity in this pairing. Bottling on the farm does not by itself drag the whole farm into secondary manufacturing the way a separate industrial plant would.",
    "Selling to customers happens in every sector. Customer contact does not force both the farm and the component plant into tertiary services. Rejecting \"Both activities belong to the tertiary sector because each sells to customers\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Business-to-business parts still come from manufacturing. Destination of the invoice does not redefine secondary work as tertiary. Rejecting \"Fabricating components from materials is tertiary because parts go to other businesses\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Harvesting and pressing olives is primary farm activity here. End sales of oil do not convert the harvest into a tertiary service. Rejecting \"Harvesting and pressing olives on the farm is tertiary because oil is sold to customers\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Harvesting and pressing olives on the farm is tertiary because oil is sold to customers\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
]

EXPL['CASE 3.2.09'] = [
    "Advanced EU economies lean on services even though food production still matters. Service dominance and a living farm sector can coexist. Keeping the label on \"Advanced EU economies are service-dominated despite the importance of food production\" matches how the case uses those words in production.",
    "Tertiary shares often clear seventy percent of output in highly developed EU states. That is the service-heavy pattern the letter names. Keeping the label on \"In highly developed EU economies the tertiary sector often exceeds seventy percent of output\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"In highly developed EU economies the tertiary sector often exceeds seventy percent of outp\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Higher GDP per capita is linked in the model to higher living standards across those member states. The statement ties those development markers together.",
    "A seventy-percent-plus service share is tertiary dominance, not primary dominance. Calling it primary reverses the sector weights. Rejecting \"A seventy percent-plus service share reflects primary dominance in advanced economies\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Developed EU states do not keep primary output above seventy percent. Food matters, but the output share has moved toward services. Rejecting \"Developed EU states keep primary output above seventy percent because food is essential\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.2.10'] = [
    "Intermediate parts sold between factories are not double-counted as final GDP. GDP focuses on final goods and services. Keeping the label on \"GDP counts final goods and services rather than intermediate goods sold between factories\" matches how the case uses those words in production.",
    "The usual GDP window is final production inside a year within national borders. That timing and geography frame is what the letter states. Keeping the label on \"GDP is usually calculated for final production within one year inside national borders\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"GDP is usually calculated for final production within one year inside national borders\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "GDP sums the money value of those final goods and services produced domestically. The definition matches the statement. Keeping the label on \"GDP totals the monetary value of final goods and services produced within a country's borders\" matches how the case uses those words in production.",
    "Domestic production counts even if the firm is foreign-owned. Borders, not nationality of shareholders, draw the GDP line. Keeping the label on \"GDP measures production within borders regardless of firm nationality\" matches how the case uses those words in production.",
    "Insurance produced at home is a final service in GDP when households or firms buy it as such. Services are not excluded from the total. Keeping the label on \"Final services such as insurance produced domestically enter GDP totals\" matches how the case uses those words in production.",
]

EXPL['CASE 3.2.11'] = [
    "A high service share says nothing automatic about environmental quality of each GDP slice. Composition and sustainability are separate questions.",
    "Seventy-four percent services means tertiary leads, not primary. Farming is not the headline sector at that weight. Keeping the label on \"Seventy-four percent services indicates tertiary dominance rather than primary leadership\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Seventy-four percent services indicates tertiary dominance rather than primary leadership\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Shares near three-quarters services are normal for advanced EU structures. The letter places the figure in that developed pattern. Keeping the label on \"Such a share is typical for economically advanced EU countries\" matches how the case uses those words in production.",
    "The same seventy-four percent reading fits a highly developed EU profile rather than an agrarian one. Keeping the label on \"Seventy-four percent service share fits a highly developed EU economy pattern\" matches how the case uses those words in production.",
    "Rising tertiary weight with development is exactly the pattern such a share illustrates. Primary gives way in relative terms as services expand.",
]

EXPL['CASE 3.2.12'] = [
    "GDP growth in the useful sense compares real, inflation-adjusted GDP across years. That is how volume change is tracked. Keeping the label on \"GDP growth compares inflation-adjusted GDP across years\" matches how the case uses those words in production.",
    "After stripping inflation, real GDP per capita can rise even if nominal headlines move differently. Price adjustment is the point. Keeping the label on \"Real GDP per capita can rise after stripping out inflation from nominal figures\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Real GDP per capita can rise after stripping out inflation from nominal figures\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Real GDP removes price noise so year-to-year production volume can be compared. The statement names that role correctly. Keeping the label on \"Real GDP strips price changes to compare volume of production over time\" matches how the case uses those words in production.",
    "Nominal GDP can rise from higher prices alone. That is not the same as real growth in output. Rejecting \"Nominal GDP increases always equal real economic growth\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Ignoring inflation muddies growth comparisons whenever prices move. Deflation adjustments exist precisely because nominal changes mislead. Rejecting \"Ignoring inflation never affects growth comparisons between years\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.2.13'] = [
    "Coaching delivered online to clients abroad remains a service. Remote channels do not invent a primary or secondary label. Keeping the label on \"Remote delivery to foreign clients keeps the activity tertiary\" matches how the case uses those words in production.",
    "Advice exports stay tertiary. No physical fabrication occurs just because the invoice crosses a border. Keeping the label on \"Exporting advice does not convert coaching into secondary manufacturing\" matches how the case uses those words in production.",
    "Working from a home office does not make coaching primary extraction. Primary means farming, mining, fishing, forestry, not domestic Wi-Fi. Rejecting \"Remote coaching is primary because trainers work from home offices\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Remote coaching is primary because trainers work from home offices\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
    "Services without shipped goods still enter GDP when produced. Border crossing of parcels is not a precondition for counting output. Rejecting \"Because no goods cross borders, the activity cannot be counted in GDP\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Home-based trainers still sell services. Extraction language does not fit lesson time sold online. Rejecting \"Selling coaching sessions is primary extraction because trainers work from home offices\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.2.14'] = [
    "Coal taken from the mine is primary extraction. That is the sector for the pit's core output. Keeping the label on \"Coal extraction at the mine is primary-sector activity\" matches how the case uses those words in production.",
    "Assembling vehicles is secondary manufacturing at the car plant. The statement keeps that stage clear. Keeping the label on \"Vehicle assembly at the car plant is secondary manufacturing\" matches how the case uses those words in production.",
    "Using mined steel inputs does not pull car assembly back into primary. Upstream origin does not rewrite downstream manufacturing. Keeping the label on \"Steel inputs from mining do not make vehicle assembly primary activity\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Steel inputs from mining do not make vehicle assembly primary activity\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Office clerks at a mine or plant support production; they do not redefine digging or assembling as tertiary services. Core activity still sets the sector.",
    "Office staff appear everywhere. Their presence does not move both the mine and the car plant into the tertiary sector. Rejecting \"Both plants belong to the tertiary sector because they employ office staff\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

EXPL['CASE 3.2.15'] = [
    "GDP leaves out some incomes and activities, which is one reason critics debate its use. The statement names that coverage limit. Keeping the label on \"GDP omission of some income sources is one reason its use is debated\" matches how the case uses those words in production.",
    "Barter often goes unrecorded or poorly measured. Official GDP does not magically capture every swap. Rejecting \"Every barter transaction is always fully recorded in official GDP\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Owner-occupied DIY maintenance is typically outside GDP. Unpaid home repair is a standard omission, not an automatic inclusion. Rejecting \"Unpaid home maintenance done by owners is always included in GDP\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Volunteering and unpaid care are major wellbeing activities GDP usually skips. Full capture is not how the accounts work. Rejecting \"GDP fully captures household volunteering and unpaid care in its totals\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "The same unpaid care and volunteering gap means official totals are incomplete by design on those fronts. \"Always counted\" is false. Rejecting \"Household volunteering and unpaid care are always counted in official GDP totals\" avoids mis-filing the same nouns into the wrong factor or sector box.\n\nA corrected scene keeps the same actors but drops the absolute wording in \"Household volunteering and unpaid care are always counted in official GDP totals\". Once the ban or mis-label is removed, each input returns to its ordinary factor or sector box without stretching a neighbouring definition.",
]

EXPL['CASE 3.2.16'] = [
    "Wheat growing is primary; insurance claims work is tertiary. Both can operate in the same region without sharing one sector label. Keeping the label on \"Farm output and insurance services can coexist as primary and tertiary activity\" matches how the case uses those words in production.\n\nWalk it once more with the case actors in view: if the statement's wording about \"Farm output and insurance services can coexist as primary and tertiary activity\" is granted, the surrounding production story still coheres, and no rival factor label is forced by a side detail such as lease versus own or short versus permanent contracts.",
    "Serving customers does not force the farm and the insurer into the same tertiary box. Sector follows activity type. Rejecting \"Both operations are tertiary because each serves customers\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Claims handling is a financial service. Covering basic risks does not turn paperwork into primary extraction. Rejecting \"Claims handling at the insurance branch is primary because policies cover basic risks\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Harvesting wheat is primary agriculture. Later milling elsewhere does not rewrite the harvest as secondary manufacturing. Rejecting \"Harvesting wheat is secondary manufacturing because flour milling follows\" avoids mis-filing the same nouns into the wrong factor or sector box.",
    "Farming grain remains primary even if flour mills wait downstream. Processing location does not redefine the field work. Rejecting \"Wheat farming is secondary because grain is processed into flour elsewhere\" avoids mis-filing the same nouns into the wrong factor or sector box.",
]

def main():
    data=json.loads(PATH.read_text())
    for c in data[START:END]:
        bodies=EXPL[c["case_id"]]
        c["tactical_explanations"]=[wrap(bodies[i], bool(c["answer_key"][i])) for i in range(5)]
    PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False)+"\n")
    print(f"Wrote {data[START]['case_id']} .. {data[END-1]['case_id']}")
if __name__=="__main__":
    main()
