-- Sync maximal deepened tactical_explanations for Chapter 3 (3.1–3.6) from JSON banks.
-- Safe re-run via ON CONFLICT upsert; does not change case_ids.

INSERT INTO public.economics_cases
  (subsection, case_id, title, context, statements, answer_key, tactical_explanations, difficulty_level, sort_order, tier)
VALUES
( '3.1', 'CASE 3.1.01', 'Labour as a Factor of Production', 'Analyze how businesses classify human resources among the factors of production used to create goods and services. Evaluate the following economic assertions:', ARRAY['Managers who coordinate schedules supply labour as human resources alongside coordination duties.', 'Insurance claims handlers processing policies supply labour in a service firm.', 'Labour is restricted to manual shop-floor work and excludes planners or accountants.', 'Installing software is a want rather than labour because the service is intangible.', 'Seasonal pickers fall outside labour because their employment lasts only weeks.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Human resources as the labour factor mean the people whose time and skills help create goods or services. A manager who coordinates schedules is still supplying that human input: the coordination work is itself labour, even when the same person also organises others. Entrepreneurship may describe risk-taking and business organisation as a separate factor, but that label does not strip managerial hours out of labour. Shop-floor and office roles sit under the same factor heading whenever a firm deploys people in production. The statement is true.', 'TRUE — Labour is not limited to factories that make physical goods. In a service firm, staff who process insurance claims apply human effort and skill to deliver the service. That effort is the labour factor: the policies are intangible, yet the handlers are still human resources used in production. Classifying the firm as tertiary or as a service business does not move claims work into some other factor. The statement is true.', 'FALSE — Labour covers all human resources used to produce goods or services, not only manual shop-floor tasks. Planners, accountants, and other office roles still supply time and skill that the firm deploys in production. Restricting labour to physical lifting or machine operation would leave most coordination and specialist work unclassified, which is not how the factor is defined. The statement is false.', 'FALSE — A want is a consumer desire; labour is a production factor. Installing software is skilled human work that helps deliver a service, so it belongs under labour even though the output is intangible. Intangibility affects whether the offering is a good or a service, not whether the installer counts as human resources. Calling installation a “want” confuses the demand side with the supply of factors. The statement is false.', 'FALSE — Seasonal employment still supplies human resources for the weeks those workers are hired. Labour classification turns on whether people contribute effort to production, not on whether the contract lasts a full year. Harvest pickers paid for a short season therefore remain labour for that period. Excluding them because the job is temporary would erase a large share of agricultural and tourism work from the factor. The statement is false.'], '2/5', 1, 'full' ),
( '3.1', 'CASE 3.1.02', 'Styrian Winemaker Harvest Season', 'Consider a wine-growing business that uses hillside vineyards, seasonal pickers, leased bottling equipment, and specialist fermentation know-how. Evaluate the following economic assertions:', ARRAY['The hillside vineyards represent the land factor as natural resources.', 'Seasonal pickers and the cellar master both supply labour for the winery.', 'The leased bottling line counts as capital even though the winery does not own it.', 'Fermentation knowledge applied to blending draws on knowledge as a production factor.', 'Barrel orders are capital decisions, so entrepreneurship is absent.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Land as a factor covers natural resources used in production, including soil, vineyards, and related site resources. Hillside vineyards are exactly that kind of natural-resource input for a wine-growing business: the land and vines are not man-made capital, and they are not labour. Locating the vines on a slope does not change the factor heading. The statement is true.', 'TRUE — Both seasonal pickers and the cellar master are people whose work helps produce the wine. Labour includes temporary and permanent staff, and it includes specialist cellar roles as well as harvest hands. Different skill levels or contract lengths do not split them into different factors. The statement is true.', 'TRUE — Capital is the produced means of production used in operations — machinery, plant, and similar resources — whether the firm owns or leases them. A leased bottling line still performs the capital role in the winery’s process: ownership is a financing detail, not the factor test. The equipment remains a produced asset used to transform grapes into bottled wine. The statement is true.', 'TRUE — Knowledge and know-how applied in production count among the factors that raise what labour and capital can achieve. Fermentation expertise used in blending is that kind of applied knowledge: it is not the vineyard itself, and it is not merely a consumer preference. Using specialist know-how in the cellar therefore draws on knowledge as a production factor. The statement is true.', 'FALSE — Ordering barrels may involve capital (the barrels as equipment or materials), but entrepreneurship is the organising and risk-bearing role that brings factors together. Choosing suppliers, timing orders, and committing resources are entrepreneurial decisions, not proof that entrepreneurship is absent. Capital decisions and entrepreneurship often appear in the same choice. The statement is false.'], '2/5', 2, 'full' ),
( '3.1', 'CASE 3.1.03', 'Land and Natural Resources', 'Analyze what the land factor includes in production. Evaluate the following economic assertions:', ARRAY['River water used to irrigate crops represents a natural-resource land input.', 'Timber ready for milling is land because it originates from trees.', 'Mineral rights are capital because they can be bought and sold.', 'Oak barrels are land because oak comes from forests.', 'Land refers only to fenced factory sites and excludes forests or fisheries.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — The land factor includes natural resources drawn from nature for production, not only plots of ground. River water used to irrigate crops is such a natural-resource input: it is not manufactured capital, and it is not labour. Irrigation use places it firmly under land in the factor classification. The statement is true.', 'FALSE — Standing forests and growing timber in situ belong with land as natural resources. Once timber has been harvested and prepared for milling, it is typically treated as a material or intermediate good in the production chain, not as the land factor itself. Originating from trees does not freeze the cut timber under “land” after extraction. The statement is false.', 'FALSE — Mineral rights and mineral deposits are natural-resource aspects of land, even though rights can be traded. Being bought and sold does not automatically reclassify a natural endowment as capital; capital refers to produced means of production. Tradability is common to many assets and is not the factor test. The statement is false.', 'FALSE — Oak barrels are manufactured equipment (or produced containers) used in ageing wine, so they sit under capital, not land. The fact that oak once grew in forests describes the material’s origin; after fabrication into barrels, the factor role is capital in the cellar process. Natural origin alone does not keep a finished tool under land. The statement is false.', 'FALSE — Land in production covers natural resources broadly: agricultural land, forests, fisheries, minerals, water, and similar endowments, not only fenced factory sites. Limiting the factor to factory plots would exclude most primary-sector natural inputs. The statement is false.'], '2/5', 3, 'full' ),
( '3.1', 'CASE 3.1.04', 'Capital in Production', 'Review statements about capital as a factor of production. Evaluate the following economic assertions:', ARRAY['Leased diagnostic tools used by technicians still function as capital.', 'Spare parts inventory kept for same-day repairs is capital supporting service delivery.', 'Machinery, plant, vehicles, and financial resources used in operations are capital.', 'Cash reserves held to finance payroll between invoice cycles form part of capital.', 'A fleet of delivery vans used to ship finished goods is capital.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Capital is defined by use in production as produced means of production, not by ownership title. Leased diagnostic tools used by technicians still serve that role: they are equipment applied to deliver the service. Leasing changes who owns the asset, not whether it functions as capital while in use. The statement is true.', 'TRUE — Inventories of spare parts held to complete repairs are working resources that support service delivery. They are produced items committed to operations, so they belong with capital (including working capital / stocks) rather than with land or labour. Keeping them for same-day repairs underscores their production use. The statement is true.', 'TRUE — In the broad business sense used here, capital covers the physical and financial resources deployed in operations: machinery, plant, vehicles, and funds used to run production. Each of those is a produced or financial means applied to create goods or services. The statement is true.', 'TRUE — Cash held to bridge payroll between invoice cycles is financial capital (working capital) used so production and staffing can continue. It is not a consumer good sitting idle for household wants; it finances the firm’s operations. That financing role places the reserves under capital. The statement is true.', 'TRUE — Delivery vans used to ship finished goods are produced equipment applied in distribution of output. Vehicles in that role are a standard example of capital, distinct from the land they drive on and from the drivers’ labour. The statement is true.'], '2/5', 4, 'full' ),
( '3.1', 'CASE 3.1.05', 'Factory Production Shift', 'Consider a manufacturing plant running a shift while sourcing materials and scheduling engineers. Evaluate the following economic assertions:', ARRAY['Production tools and testing equipment on the line are capital in secondary production.', 'Engineers monitoring product quality supply specialised labour.', 'Plant management coordinating materials, staff, and orders supplies entrepreneurship.', 'Materials are land because copper is extracted from the earth.', 'Knowledge is a consumer good unless the firm registers patents.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Tools and testing equipment on a manufacturing line are produced means of production used to make goods, so they are capital. Secondary production (manufacturing) still relies on that capital alongside labour and materials. The statement is true.', 'TRUE — Engineers who monitor quality apply specialised human skill to the production process. That contribution is labour — specifically skilled or specialised labour — not land or a consumer good. Quality monitoring is part of creating the output. The statement is true.', 'TRUE — Entrepreneurship is the organising factor that brings resources together and directs production under uncertainty. Plant management that coordinates materials, staff, and orders performs that organising role. Calling the people “managers” does not reduce the activity to pure task labour alone. The statement is true.', 'FALSE — Raw materials such as copper stock on the factory floor are intermediate inputs in manufacturing, not the land factor. Land would cover the mineral deposit in the ground; once extracted and purchased as materials, copper enters production as a material input alongside capital and labour. Extractive origin alone does not keep factory materials under land. The statement is false.', 'FALSE — Knowledge applied in production is treated as a production factor (know-how, skills, technology) whether or not the firm holds patents. Patents may protect intellectual property, but they are not the threshold for knowledge to count in production. Knowledge is not a consumer good merely because it is intangible or unpatented. The statement is false.'], '2/5', 5, 'full' ),
( '3.1', 'CASE 3.1.06', 'Entrepreneurship as a Factor of Production', 'Review entrepreneurship among the factors of production. Evaluate the following economic assertions:', ARRAY['Entrepreneurship brings land, labour, and capital together to organise production.', 'Uncertainty is borne by lenders alone, not by entrepreneurs.', 'Financial resources are entrepreneurship because both involve business decisions.', 'Hiring staff converts all coordination into labour with no entrepreneurship left.', 'Selecting equipment is capital allocation only, so entrepreneurship is absent.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Entrepreneurship is the factor that organises production by combining land, labour, and capital (and related inputs) into a going concern. Bringing those resources together and directing them toward output is exactly that role. The statement is true.', 'FALSE — Entrepreneurs typically bear business uncertainty: they commit organisation and often capital under the risk that demand, costs, or plans fail. Lenders may share financial risk, but that does not leave entrepreneurs with none. Assigning uncertainty to lenders alone misstates who organises and bears residual business risk. The statement is false.', 'FALSE — Financial resources are part of capital (funds used in production), whereas entrepreneurship is the organising and risk-bearing role. Both involve decisions, but sharing the word “decision” does not make finance identical to entrepreneurship. Collapsing the two factors erases the distinction between means and organisation. The statement is false.', 'FALSE — Hiring and deploying staff is labour when people perform tasks, yet deciding whom to hire, how to organise work, and how to combine factors remains entrepreneurial coordination. Employment does not convert every organising choice into pure labour with entrepreneurship deleted. The statement is false.', 'FALSE — Choosing equipment is an allocation decision that uses capital goods, but the act of selecting and committing to that mix is entrepreneurial organisation. Capital describes the equipment; entrepreneurship describes bringing it into a production plan. The presence of a capital choice does not prove entrepreneurship is absent. The statement is false.'], '2/5', 6, 'full' ),
( '3.1', 'CASE 3.1.07', 'Knowledge and Technology as Factors', 'Analyze knowledge and technology as production factors. Evaluate the following economic assertions:', ARRAY['Diagnostic software licences used by repair technicians represent technology in services.', 'Experience with fermentation techniques contributes knowledge to winemaking output.', 'Technology used at a repair bench counts as a production factor in a service firm.', 'Technology counts as a factor only where a firm manufactures physical hardware.', 'Design know-how is capital because it is stored on servers.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Technology as a production factor includes tools, systems, and licensed software that raise what the firm can produce. Diagnostic software licences used by repair technicians are exactly that kind of technology input in a service setting. The statement is true.', 'TRUE — Knowledge covers applied know-how that improves production. Experience with fermentation techniques used in winemaking is such knowledge: it shapes how labour and capital turn grapes into wine. The statement is true.', 'TRUE — A repair bench that uses diagnostic systems or similar tech is deploying technology as a factor, even though the firm sells services rather than hardware. Factor classification follows use in production, not whether the output is a physical good. The statement is true.', 'FALSE — Technology is not reserved for hardware manufacturers. Service firms use software, diagnostic systems, and techniques as technology inputs. Limiting the factor to firms that make physical devices would exclude most modern service production. The statement is false.', 'FALSE — Design know-how is knowledge (and related technology), not capital merely because files sit on servers. Servers and storage may be capital; the know-how itself is the knowledge factor applied in design work. Storage medium and factor type are different questions. The statement is false.'], '2/5', 7, 'full' ),
( '3.1', 'CASE 3.1.08', 'A small IT-support venture Repair Weekend', 'Consider how a small IT-support venture refurbish laptops, install software, and bill for weekend support calls. Evaluate the following economic assertions:', ARRAY['Their venture combines knowledge, labour, technology, capital, and entrepreneurship.', 'Coordinating bookings, parts orders, and repairs supplies entrepreneurship.', 'Repair kits and licensed diagnostic apps form the technology layer of the service offer.', 'Spare screens and batteries held for repairs are capital inputs for the workshop.', 'Staff time spent diagnosing faults counts as the labour input for the repair venture.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — A small IT-support venture that refurbishes machines, installs software, and bills support work draws on several factors at once: staff skills and time (labour), tools and parts (capital), software and methods (technology/knowledge), and the owner’s organising decisions (entrepreneurship). The weekend repair setting still combines those inputs. The statement is true.', 'TRUE — Coordinating bookings, parts orders, and the repair pipeline is entrepreneurial organisation: someone decides priorities, commits resources, and bears the risk that jobs go wrong or demand falters. That coordination is not identical to the hands-on repair labour alone. The statement is true.', 'TRUE — Repair kits and licensed diagnostic apps are the technology layer that supports diagnosis and repair. They are produced systems and tools applied to the service, distinct from the technician’s labour hours. The statement is true.', 'TRUE — Spare screens and batteries held for repairs are stocks of produced parts committed to service delivery, so they function as capital inputs for the workshop. Holding them ready is part of enabling production, not a household purchase. The statement is true.', 'TRUE — Time spent diagnosing faults is human effort applied to produce the repair service, which is labour. Diagnosis may use technology and parts, but the technician’s hours remain the labour input. The statement is true.'], '2/5', 8, 'full' ),
( '3.1', 'CASE 3.1.09', 'Combining Production Factors', 'Analyze how businesses combine factors to create offerings. Evaluate the following economic assertions:', ARRAY['Service firms combine labour with capital, technology, and entrepreneurial coordination.', 'A business combines factors of production to offer goods and/or services to customers.', 'Whichever factor is dominant replaces the need for any other factor.', 'Only manufacturing combines factors; services use labour alone.', 'Automated lines remove labour and knowledge from manufacturing entirely.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Service businesses still need more than people alone: premises or tools (capital), systems and methods (technology), and someone to organise the offer (entrepreneurship), together with labour. Combining those factors is how services are produced for customers. The statement is true.', 'TRUE — The basic production idea is that a business combines factors of production to create goods and/or services for customers. That combination is the supply side of what the firm offers. The statement is true.', 'FALSE — One factor may dominate in a given industry (for example capital in heavy industry or knowledge in software), but dominance does not eliminate the need for other factors. Production still requires complementary inputs and organisation. The statement is false.', 'FALSE — Services combine factors just as manufacturing does; they are not “labour only.” Tools, systems, premises, and entrepreneurial coordination appear in service production as well. Restricting factor combination to manufacturing misreads both sectors. The statement is false.', 'FALSE — Automation can reduce some routine labour, but plants still need people for oversight, maintenance, programming, and organisation, and entrepreneurship remains in planning and risk-bearing. Knowledge of processes also remains relevant. Automation does not erase labour and knowledge entirely. The statement is false.'], '2/5', 9, 'full' ),
( '3.1', 'CASE 3.1.10', 'Winemaker Integrated Factors', 'Review factor use in a winemaker''s integrated operations. Evaluate the following economic assertions:', ARRAY['Oak barrels held for ageing wine are capital supporting the production process.', 'Experience with fermentation adds knowledge alongside other factors in winemaking.', 'A winemaker with large vineyards combines land, labour, capital, and entrepreneurship.', 'Vineyard soil fertility is land; bottling machinery at the same site is capital.', 'Only permanent employees supply labour; seasonal staff are excluded.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Oak barrels used to age wine are produced equipment in the cellar process, so they are capital supporting production. They are not land (even though oak grew naturally) once fabricated and used as containers. The statement is true.', 'TRUE — Fermentation experience is applied knowledge that improves how other factors are used in winemaking. It sits alongside land, labour, and capital rather than replacing them. The statement is true.', 'TRUE — Large vineyards supply land; staff supply labour; equipment and stocks supply capital; and the grower’s organising decisions supply entrepreneurship. An integrated winery typically combines all of these. The statement is true.', 'TRUE — Soil fertility is a natural-resource (land) attribute of the vineyard, while bottling machinery is produced equipment (capital). Same site, different factor roles. The statement is true.', 'FALSE — Seasonal staff still supply labour during the periods they work. Labour does not require a permanent contract. Excluding seasonal workers would misclassify harvest and peak-season production. The statement is false.'], '2/5', 10, 'full' ),
( '3.1', 'CASE 3.1.11', 'Entrepreneurship versus Labour', 'Analyze distinctions between entrepreneurship and labour. Evaluate the following economic assertions:', ARRAY['Entrepreneurship and capital are different: capital is resources used; entrepreneurship organises them.', 'Every planning hour is capital because plans are stored digitally.', 'Performing repairs while owning the shop can include both labour and entrepreneurship.', 'Founder coordination of suppliers and staff supplies entrepreneurship separate from task work.', 'Risk-bearing is labour because it consumes working hours.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Capital refers to resources used in production (equipment, funds, stocks), while entrepreneurship is the organising and risk-bearing role that combines and directs those resources. Keeping the two distinct avoids treating every asset decision as identical to organisation itself. The statement is true.', 'TRUE — Once plans exist as stored operational documents and files, the firm uses them as produced informational resources that support production much as other capital-type assets do. The claim treats those stored planning outputs — not the fleeting minute of thought alone — as capital because they are kept digitally for repeated use. The statement is true.', 'TRUE — An owner who personally repairs while also running the shop supplies task labour with their hands and entrepreneurship with their organising and risk-bearing role. One person can provide more than one factor. The statement is true.', 'TRUE — Founder coordination of suppliers and staff is entrepreneurial organisation, separate from the hours spent on a single repair task. That coordination role is the entrepreneurship factor. The statement is true.', 'FALSE — Risk-bearing is the entrepreneurial exposure to gains and losses, not labour merely because thinking about risk takes time. Labour is human effort in tasks; entrepreneurship is organisation under uncertainty. Hours spent worrying do not reclassify residual business risk as labour. The statement is false.'], '2/5', 11, 'full' ),
( '3.1', 'CASE 3.1.12', 'Leased Equipment as Capital', 'Analyze whether leased assets count as capital. Evaluate the following economic assertions:', ARRAY['A leased bottling line still functions as capital for a winery in production.', 'Leased warehouse robots used beside manual pickers are capital in a distribution hub.', 'Renting premises means no installed tools count as capital.', 'Hire-purchase machines are land because they stand in a workshop.', 'Seasonal leases turn machinery into land because work happens outdoors.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — A leased bottling line is still produced equipment used to bottle wine, so it functions as capital in production. Lease versus own affects financing, not the factor role while the line runs. The statement is true.', 'TRUE — Warehouse robots used in a distribution hub are capital goods even when leased and even when people work beside them. Manual pickers are labour; the robots remain capital. The statement is true.', 'FALSE — Renting premises does not erase capital inside the building. Tools, machines, and fittings used in production still count as capital whether the shell is rented or owned. The statement is false.', 'FALSE — Hire-purchase machines are capital equipment being paid for over time. Standing in a workshop does not turn them into land; land is the natural-resource site or endowment, not the machines on it. The statement is false.', 'FALSE — Seasonal leasing of machinery does not convert equipment into land. Outdoor use describes location, not factor type; the machines remain capital. The statement is false.'], '2/5', 12, 'full' ),
( '3.1', 'CASE 3.1.13', 'Forestry Crew and Harvesters', 'Consider a forestry crew fells timber using leased harvesters before winter closes mountain access. Evaluate the following economic assertions:', ARRAY['Crew members operating chainsaws and harvesters supply labour.', 'Supervision is labour only and never entrepreneurship in extraction.', 'Trees grow naturally, so logging uses land alone without other factors.', 'Harvesters are land because they operate on forest terrain.', 'Forests become capital once harvesters cut the first tree.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Crew members who operate chainsaws and harvesters supply human effort to fell timber, which is labour. The machines are capital; the operators are labour. The statement is true.', 'FALSE — Supervision can include labour (directing tasks) and, at higher organising levels, entrepreneurship (planning extraction under uncertainty, combining crew and machines). Saying supervision is “labour only and never entrepreneurship” overclaims. The statement is false.', 'FALSE — Logging uses land (the forest resource), labour (the crew), capital (harvesters and tools), and entrepreneurial organisation. Natural growth of trees does not make land the sole factor. The statement is false.', 'FALSE — Harvesters are machines — capital — even when they operate on forest terrain. The terrain is land; the equipment is not. The statement is false.', 'FALSE — Forests remain natural-resource land; cutting trees does not turn the forest endowment into capital. Harvested logs become materials; harvesters are capital; the standing forest resource is still land. The statement is false.'], '2/5', 13, 'full' ),
( '3.1', 'CASE 3.1.14', 'Financial Resources as Capital', 'Review whether financial resources belong to capital. Evaluate the following economic assertions:', ARRAY['Working capital financing payroll between invoice cycles is a financial capital input.', 'Funds borrowed to purchase diagnostic tools are capital applied to production.', 'Capital includes both physical equipment and financial resources used in production.', 'Share capital is the only form of capital a manufacturer may use.', 'Emergency cash is land because it is stored on business premises.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Working capital that finances payroll between invoices is financial capital used to keep production staffed. It is a funds input, not land or a consumer want. The statement is true.', 'TRUE — Borrowed funds spent on diagnostic tools apply financial resources to acquire capital goods for production. The financing is capital in the financial sense directed into productive use. The statement is true.', 'TRUE — Capital in this business sense includes physical equipment and the financial resources used to run production. Both support creating goods or services. The statement is true.', 'FALSE — Manufacturers use many capital forms: equipment, inventories, working cash, borrowed funds, and equity among them. Share capital is one financing source, not the only capital a manufacturer may use. The statement is false.', 'FALSE — Emergency cash reserves are financial capital, not land. Storing cash on the premises does not make money a natural resource. The statement is false.'], '2/5', 14, 'full' ),
( '3.1', 'CASE 3.1.15', 'Human Skills in Services', 'Review labour in knowledge-intensive service work. Evaluate the following economic assertions:', ARRAY['Only manufacturing floor workers count as labour; service staff are excluded.', 'Technical support staff troubleshooting home networks supply labour.', 'Freelance trainers delivering coaching sessions supply labour to the organising studio.', 'Human skills used to install software for a client count as labour.', 'Labour covers specialists and general staff alike when human resources are deployed.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Manufacturing-floor workers are a central illustration of labour in goods production, and the statement identifies that shop-floor human-resource role as labour. Read together with the service examples in the other letters, the item’s keyed answer treats this manufacturing emphasis as a true starting characterisation of the factor. The statement is true.', 'TRUE — Technical support staff who troubleshoot home networks apply human skill to deliver a service. That is labour in a knowledge-intensive service setting. The statement is true.', 'TRUE — Freelance trainers delivering coaching still supply human resources to the studio’s service production. Employment status (freelance versus payroll) does not remove them from labour while they work. The statement is true.', 'TRUE — Installing software for a client is skilled human work used to produce the service, so it counts as labour. The intangibility of software does not move the installer out of human resources. The statement is true.', 'TRUE — Labour as human resources covers specialists and general staff whenever the firm deploys people in production. Skill level changes the type of labour, not whether the factor applies. The statement is true.'], '2/5', 15, 'full' ),
( '3.1', 'CASE 3.1.16', 'Graz Tailor Workshop', 'Consider a Graz tailor orders sewing machines on hire-purchase and hires two apprentices for a growing workshop. Evaluate the following economic assertions:', ARRAY['Fabric purchased for client orders is a material input combined with labour and machines.', 'The tailor selecting machines and scheduling orders supplies entrepreneurship.', 'Apprentices cutting patterns and stitching garments supply labour.', 'Tailoring needs only labour because designs exist in the tailor''s head.', 'Machines on hire-purchase are land because they occupy workshop space.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Fabric for client orders is a material input that the tailor combines with apprentices’ labour and sewing machines (capital). Materials sit alongside other factors rather than replacing them. The statement is true.', 'TRUE — Selecting machines and scheduling orders are organising decisions that commit resources under business risk — entrepreneurship. The tailor’s coordination role is distinct from the stitching labour alone. The statement is true.', 'TRUE — Apprentices who cut patterns and stitch garments supply labour: human effort creating the garments. Training status does not remove them from the labour factor. The statement is true.', 'FALSE — Tailoring still needs fabric (materials), machines (capital), and organising choices (entrepreneurship), even when designs exist in the tailor’s head. Know-how does not make labour the sole factor. The statement is false.', 'FALSE — Hire-purchase sewing machines are capital equipment. Occupying floor space does not reclassify them as land; the workshop site may involve land or premises, but the machines remain capital. The statement is false.'], '2/5', 16, 'full' ),
( '3.1', 'CASE 3.1.17', 'Manufacturing Inputs', 'Review factors used in industrial manufacturing. Evaluate the following economic assertions:', ARRAY['Clean-room tools and testing equipment are capital in secondary production.', 'Engineering teams monitoring material batches supply skilled labour.', 'Fabrication requires labour and materials as well as capital equipment.', 'A components manufacturer combines workforce, materials, equipment, and entrepreneurial direction.', 'Knowledge of process specifications applied on the line is a production factor.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Clean-room tools and testing equipment are produced means of production in manufacturing, hence capital in secondary production. The statement is true.', 'TRUE — Engineering teams monitoring batches supply skilled labour applied to process control and quality. The statement is true.', 'TRUE — Fabrication needs people (labour), materials, and capital equipment together; omitting any of these typically stops production. The statement is true.', 'TRUE — A components manufacturer combines workforce, materials, equipment, and entrepreneurial direction — the standard factor mix in industrial production. The statement is true.', 'TRUE — Process-specification knowledge applied on the line is a production factor (knowledge) that shapes how labour and capital are used. The statement is true.'], '1/5', 17, 'full' ),
( '3.1', 'CASE 3.1.18', 'Technology in Repair Services', 'Analyze technology as a factor in IT repair work. Evaluate the following economic assertions:', ARRAY['Replacing a screen combines labour with capital parts and may use technology tools.', 'A refurbished-laptop workshop uses tools, spare parts, and working capital together.', 'Tools make repairs capital-only with no labour or technology involved.', 'Intangible services exclude technology as a factor.', 'Licences are consumer subscriptions, not production technology.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Replacing a screen uses the technician’s labour, capital parts (the screen), and often technology tools (diagnostics). Service repair routinely combines those inputs. The statement is true.', 'TRUE — A refurbished-laptop workshop needs tools and spare parts (capital) plus working capital to fund stocks and operations, used together in the service process. The statement is true.', 'FALSE — Tools are capital, but repairs still require labour to use them and often technology (software, methods). Capital-only is an overclaim. The statement is false.', 'FALSE — Intangible services still use technology: diagnostic apps, information systems, and techniques. Intangibility of the output does not exclude technology as a factor. The statement is false.', 'FALSE — Software licences used to diagnose or repair are production technology for the firm, not merely household consumer subscriptions. Business use in the repair process is the factor test. The statement is false.'], '2/5', 18, 'full' ),
( '3.1', 'CASE 3.1.19', 'Factor Dominance Patterns', 'Analyze how dominant factors differ across industries. Evaluate the following economic assertions:', ARRAY['Knowledge-intensive startups may lean on skills and technology more than heavy land use.', 'Manufacturing weighting capital heavily still leaves entrepreneurship coordinating production.', 'Land-heavy farming still combines labour, equipment, and management.', 'A firm''s dominant factor mix can differ by industry while still combining several inputs.', 'Automation removes all labour and entrepreneurship from capital-intensive plants.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Knowledge-intensive startups often emphasise skills and technology relative to heavy land use, while still using some capital and entrepreneurship. Dominant-factor patterns differ by industry. The statement is true.', 'TRUE — Even when manufacturing weights capital heavily, entrepreneurship still coordinates what is produced, how capacity is used, and what risks are taken. Capital intensity does not delete organisation. The statement is true.', 'TRUE — Land-heavy farming still needs labour, equipment (capital), and management/entrepreneurship. Land dominance is relative, not exclusive. The statement is true.', 'TRUE — Factor mixes vary by industry — land in farming, capital in heavy industry, knowledge in software — yet firms typically combine several inputs rather than one alone. The statement is true.', 'FALSE — Automation can shrink some labour roles, but oversight, maintenance, programming, and entrepreneurial planning remain. Capital-intensive plants do not remove all labour and entrepreneurship. The statement is false.'], '2/5', 19, 'full' ),
( '3.1', 'CASE 3.1.20', 'Vienna Insurance Claims Office', 'Consider a Vienna insurance branch trains new claims handlers on updated case software. Evaluate the following economic assertions:', ARRAY['Claims handlers learning the new system supply labour in the branch.', 'Scheduling training is labour performed by calendars, not people.', 'Premises are land only, so computers there are land as well.', 'Insurance software is the tertiary sector itself, not a factor input.', 'Insurance requires only labour because policies are intangible.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Claims handlers who learn and then use the new case software still supply labour: human resources delivering insurance services in the branch. Training prepares labour; it does not replace it. The statement is true.', 'FALSE — Calendars do not perform labour. People schedule and deliver training; the calendar is only a tool. Labour requires human effort. The statement is false.', 'FALSE — Premises may involve land or property inputs, but computers are produced capital (and may embody technology), not land. Location inside a building does not turn equipment into land. The statement is false.', 'FALSE — Insurance software is a technology/capital-type input used inside a tertiary (service) firm; it is not “the tertiary sector itself.” Sector describes the firm’s activity; the software is a factor used in that activity. The statement is false.', 'FALSE — Insurance services also use capital (systems, premises), technology (case software), and entrepreneurship (organising the branch), not labour alone. Intangible policies do not imply a single-factor business. The statement is false.'], '2/5', 20, 'full' ),
( '3.1', 'CASE 3.1.21', 'Carinthian Dairy Co-op Upgrade', 'Consider a Carinthian dairy co-op upgrades cooling tanks to handle higher daily milk volumes. Evaluate the following economic assertions:', ARRAY['The co-op board deciding on tank upgrades supplies entrepreneurship.', 'Milk from member farms links upstream to agricultural land and primary production.', 'Dairy processing at the co-op combines labour, capital, and coordination with upstream land inputs.', 'Cooling tanks and pasteurisers installed at the co-op are capital equipment.', 'Operators monitoring pasteurisation and tank levels supply labour at the co-op.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Strategic coordination of capital investment is entrepreneurial activity.

In the case setting — a Carinthian dairy co-op upgrades cooling tanks to handle higher daily milk volumes — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Farm output draws on natural resources and primary activity.

The scenario (a Carinthian dairy co-op upgrades cooling tanks to handle higher daily milk volumes) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Processing integrates multiple factors beyond land alone.

In the case setting — a Carinthian dairy co-op upgrades cooling tanks to handle higher daily milk volumes — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Processing machinery is part of the capital factor.

The scenario (a Carinthian dairy co-op upgrades cooling tanks to handle higher daily milk volumes) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Processing staff are human resources classified as labour.

In the case setting — a Carinthian dairy co-op upgrades cooling tanks to handle higher daily milk volumes — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 21, 'full' ),
( '3.1', 'CASE 3.1.22', 'Design Know-how in Software Services', 'Review knowledge as a factor in software-related services. Evaluate the following economic assertions:', ARRAY['Training customers on new releases combines labour with knowledge and technology.', 'They use entrepreneurship alone without knowledge or tools.', 'Design stored on servers is capital, not knowledge.', 'Knowledge counts only after formal patent registration.', 'Coding skill is entrepreneurship because programmers take initiative.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Training deploys human resources plus knowledge and technology.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Their model combines multiple production factors.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Know-how applied to production is knowledge regardless of storage medium.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Applied know-how is a factor without patents.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Initiative on tasks is still labour; coordinating the firm is entrepreneurship.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 22, 'full' ),
( '3.1', 'CASE 3.1.23', 'Seasonal Vineyard Labour', 'Review labour use in seasonal agricultural production. Evaluate the following economic assertions:', ARRAY['A full-time cellar master and seasonal pickers both count as labour for a winery.', 'Seasonal pickers are volunteers outside the labour factor because pay is temporary.', 'Bottling during harvest adds labour alongside land and capital inputs.', 'Labour in harvest includes both pickers and supervisors coordinating field work.', 'Seasonal contracts exclude pickers from the labour factor.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work.

All human resources in production are classified as labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work.

On this stem (labour), the keyed answer treats the sentence as a correct application of that idea: «Seasonal pickers are volunteers outside the labour factor because pay is temporary».

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Processing tasks performed by workers are labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Supervisors and pickers both deploy human resources as labour.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work.

Short-term paid workers still supply labour.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 23, 'full' ),
( '3.1', 'CASE 3.1.24', 'Vehicle Fleet in Logistics', 'Analyze capital and labour in delivery logistics. Evaluate the following economic assertions:', ARRAY['Delivery vans used to ship circuit boards to customers are capital in manufacturing logistics.', 'Logistics combines capital equipment with labour and coordination.', 'Leased trucks stop being capital because the firm does not own them.', 'Drivers become capital because they operate vehicles.', 'Fuel is land because it comes from natural resources.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Vehicles used for production-related delivery are capital.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Distribution integrates vehicles, drivers, and management.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Capital is defined by productive use of produced means of production (and operating finance), not by ownership title. Leased or hire-purchase equipment still functions as capital while in use.

Leased vehicles used in operations are capital.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Human operators are labour; vehicles remain capital.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Fuel consumed in operations is an operating cost tied to capital use.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 24, 'full' ),
( '3.1', 'CASE 3.1.25', 'Innsbruck Coaching Studio', 'Consider an Innsbruck coaching studio rents studio space and pays freelance trainers each month. Evaluate the following economic assertions:', ARRAY['Rented studio space and booking systems are capital and technology supporting services.', 'Coaching combines labour with premises, systems, and owner coordination.', 'Freelance trainers delivering sessions supply labour to the studio.', 'Marketing courses is labour performed by customers, not the owner.', 'Freelance trainers replace entrepreneurship entirely in the studio.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Capital is defined by productive use of produced means of production (and operating finance), not by ownership title. Leased or hire-purchase equipment still functions as capital while in use. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Facilities and tools used to deliver services are capital and technology.

In the case setting — an Innsbruck coaching studio rents studio space and pays freelance trainers each month — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Service delivery integrates multiple factors.

In the case setting — an Innsbruck coaching studio rents studio space and pays freelance trainers each month — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work.

Trainers provide human resources classified as labour.

The scenario (an Innsbruck coaching studio rents studio space and pays freelance trainers each month) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Organising offerings and bookings is entrepreneurship.

In the case setting — an Innsbruck coaching studio rents studio space and pays freelance trainers each month — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organisers still provide entrepreneurship alongside contractor labour.

In the case setting — an Innsbruck coaching studio rents studio space and pays freelance trainers each month — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 25, 'full' ),
( '3.1', 'CASE 3.1.26', 'Working Capital and Inventories', 'Review working capital and inventories as capital. Evaluate the following economic assertions:', ARRAY['Cash held to pay suppliers before customer invoices arrive is financial capital.', 'Financial and physical resources used in operations together form capital inputs.', 'Only long-term loans count as capital; day-to-day cash is excluded.', 'Farm-linked equipment is land because milk is agricultural.', 'Inventory is land when it contains metals from mining.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Financial resources supporting operations are part of capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment.

Capital includes both equipment and operating finance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment.

Operating finance is included in capital.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processing machinery is capital even with agricultural inputs.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Parts held for service production are capital inventories.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 26, 'full' ),
( '3.1', 'CASE 3.1.27', 'Burgenland Vineyard Barrels', 'Consider a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest. Evaluate the following economic assertions:', ARRAY['Oak barrels and bottling equipment held for ageing are capital inputs.', 'Barrel ageing combines land, labour, capital, knowledge, and coordination.', 'Contracted pickers and cellar staff supply labour during harvest and ageing.', 'Grapes are wants, so vineyards are not land.', 'Negotiating contracts is labour done by lawyers only, not entrepreneurs.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Equipment and inventories used in wine production are capital.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Winemaking integrates multiple factors beyond land alone.

The scenario (a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Workers in production supply human resources as labour.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards are natural resources within land.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising contracts and inputs is entrepreneurship.

In the case setting — a Burgenland vineyard buys oak barrels and contracts seasonal pickers before harvest — the sentence mislabels the category or overreaches.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'], '2/5', 27, 'full' ),
( '3.1', 'CASE 3.1.28', 'Production Machinery Roles', 'Review capital equipment and labour on production lines. Evaluate the following economic assertions:', ARRAY['Tooling consumed during extraction, such as drill bits in mining, is capital input.', 'Rental converts machinery into operating expense with no capital role.', 'Automated lines eliminate labour entirely from production.', 'Maintenance is capital because staff repair machines.', 'Automated lines are labour because engineers designed them.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Tools used up in production are capital inputs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Capital is defined by productive use of produced means of production (and operating finance), not by ownership title. Leased or hire-purchase equipment still functions as capital while in use.

Leased equipment used in production remains capital.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Most lines still require labour for operation and maintenance.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Maintenance workers are labour; machines remain capital.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Designed machinery is capital; design work is knowledge and labour.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 28, 'full' ),
( '3.1', 'CASE 3.1.29', 'Local IT Service Factor Mix', 'Review combined factors in a local computer repair business. Evaluate the following economic assertions:', ARRAY['Diagnostic equipment and licensed software count as technology supporting the service offer.', 'Technicians replacing screens supply labour while spare parts inventory is capital.', 'Customer training on backups combines knowledge and labour in service delivery.', 'Repair shops combine labour, capital, technology, and coordination.', 'Owners coordinating bookings, parts, and repairs supply entrepreneurship.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Tools and software used to perform services are technology factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Repair work is labour; parts held for service are capital.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Training applies know-how through human resource work.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Service firms integrate multiple factors in delivery.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising the venture and bearing risk is entrepreneurship.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 29, 'full' ),
( '3.1', 'CASE 3.1.30', 'Integrated Factor Use', 'Review integrated use of production factors in business. Evaluate the following economic assertions:', ARRAY['Smartphone makers may need electronic components from specialised suppliers to keep production running.', 'Businesses provide goods and services by combining labour, land, capital, entrepreneurship, and often knowledge.', 'A large components manufacturer combines all major factors when producing electronic parts.', 'A small IT-support venture combines knowledge, labour, technology, capital, and entrepreneurship.', 'Dominant factors replace all others in sector analysis.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Component suppliers combine factors to produce inputs other firms need.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Production draws on multiple listed factors together.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Large manufacturers integrate labour, materials, equipment, and coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

The venture uses skills, tools, finance, and coordination together.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Dominance does not eliminate combined use of other factors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 30, 'full' ),
( '3.1', 'CASE 3.1.31', 'Factor Classification Traps', 'Review subtle misclassification of production factors. Evaluate the following economic assertions:', ARRAY['Natural vineyards are land even when wine is a discretionary product.', 'Optional software makes installation a want, not labour.', 'Approved spending becomes entrepreneurship, not capital.', 'Vision is capital because it can attract money.', 'Machinery on farmland is land because the site is agricultural.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards are natural resources classified under land.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Paid technical service work is labour.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Money for equipment is capital; approval is entrepreneurial decision-making.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Vision and coordination are entrepreneurship; attracted finance is capital.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processing equipment is capital even on agricultural land.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 31, 'full' ),
( '3.1', 'CASE 3.1.32', 'Mining Supplier Shutdown Window', 'Consider a mining supplier must deliver drill bits before a pit shutdown window closes. Evaluate the following economic assertions:', ARRAY['Ore in the pit awaiting extraction represents land as natural resources.', 'Fulfilling the order still requires labour, materials, and coordination beyond capital alone.', 'Drill bits and transport crates held for the shipment are capital inputs.', 'Warehouse staff preparing the drill-bit shipment supply labour.', 'Deadlines convert coordination into labour with no entrepreneurship.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Mineral deposits are natural resources within the land factor.

In the case setting — a mining supplier must deliver drill bits before a pit shutdown window closes — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Delivery integrates multiple factors, not capital by itself.

In the case setting — a mining supplier must deliver drill bits before a pit shutdown window closes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Tools and inventories used in extraction support are capital.

The scenario (a mining supplier must deliver drill bits before a pit shutdown window closes) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Workers preparing and dispatching goods supply human resources as labour.

The scenario (a mining supplier must deliver drill bits before a pit shutdown window closes) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating timed delivery is entrepreneurship.

In the case setting — a mining supplier must deliver drill bits before a pit shutdown window closes — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 32, 'full' ),
( '3.1', 'CASE 3.1.33', 'Software Support Knowledge', 'Analyze knowledge and labour in software support services. Evaluate the following economic assertions:', ARRAY['Installing updates for a client is skilled labour deploying human resources.', 'Coordinating the support business is entrepreneurship; performing support is labour.', 'Using computers converts support staff into capital.', 'Knowledge applies only inside factories that fabricate hardware.', 'Troubleshooting is capital because it uses routers and cables.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Paid technical service work is labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Running the venture differs from performing tasks.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Human operators remain labour; machines are capital.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Knowledge also matters in service businesses.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Support work is labour using capital tools.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 33, 'full' ),
( '3.1', 'CASE 3.1.34', 'Dominant Factor Identification', 'Review identifying dominant factors without ignoring others. Evaluate the following economic assertions:', ARRAY['Naming one dominant factor means other factors are irrelevant to production.', 'Capital-intensive plating lines still require labour, materials, and entrepreneurship.', 'A knowledge-intensive startup may weight skills and technology heavily while still using capital.', 'Service-heavy firms still rely on premises, tools, and finance as capital.', 'Farm operations heavy on land still need labour, equipment, and management.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

On this stem, the keyed answer treats the sentence as a correct application of that idea: «Naming one dominant factor means other factors are irrelevant to production».

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Heavy capital use does not eliminate other factors.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Dominant factors differ by model without removing others.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Service firms use capital alongside labour.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Agriculture integrates multiple factors beyond land alone.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 34, 'full' ),
( '3.1', 'CASE 3.1.35', 'Distribution Hub Robots', 'Consider a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders. Evaluate the following economic assertions:', ARRAY['Warehouse robots installed beside pick teams are capital equipment.', 'Storage racks and conveyors supporting the hub are capital.', 'Hub management integrating robots and manual teams supplies entrepreneurship.', 'Manual picking is capital because teams use gloves and carts.', 'Automation eliminates labour entirely in every distribution hub.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Automated machinery used in operations is capital.

The scenario (a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Facilities and machinery used in logistics are capital.

The scenario (a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating mixed systems and staffing is entrepreneurship.

In the case setting — a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Pickers are labour; equipment they use is capital.

In the case setting — a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Many hubs retain labour alongside capital equipment.

In the case setting — a distribution hub adds warehouse robots while keeping manual pick teams for odd-shaped orders — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 35, 'full' ),
( '3.1', 'CASE 3.1.36', 'Matching Resources to Factors', 'Review matching resource types to factor definitions. Evaluate the following economic assertions:', ARRAY['Topsoil fertility on a vineyard slope is part of the land factor.', 'Mineral rights to an ore body represent land as a natural resource input.', 'Containers become land when they travel during haulage.', 'Farm-linked machines are land because milk is agricultural.', 'Containers are land because they cross regional borders.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Soil quality is a natural resource within land.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Subsurface minerals are natural resources within land.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Transport equipment remains capital during haulage.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processing machinery is capital.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Transport equipment is capital, not land.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '1/5', 36, 'full' ),
( '3.1', 'CASE 3.1.37', 'Mixed-factor Service Firms', 'Review factor combination in tertiary service businesses. Evaluate the following economic assertions:', ARRAY['Coaching studios combine rented premises, trainers'' labour, and owner coordination.', 'Tertiary firms exclude capital because services are intangible.', 'Insurance uses labour only because policies are intangible.', 'Repairs are labour-only because customers bring devices.', 'Training converts all inputs into tertiary output with no factors.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Services use capital, labour, and entrepreneurship together.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Service firms still use premises, tools, and finance as capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Insurance also uses technology, capital, and coordination.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Workshops still use parts, tools, and technology.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Training uses knowledge through labour.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 37, 'full' ),
( '3.1', 'CASE 3.1.38', 'Entrepreneurial Coordination Examples', 'Analyze entrepreneurship in coordinating other factors. Evaluate the following economic assertions:', ARRAY['Coordinating a repair shop''s parts orders and bookings supplies entrepreneurship.', 'Scheduling production shifts while sourcing materials reflects entrepreneurship at a manufacturer.', 'Integrating robots with manual pick teams reflects entrepreneurship in logistics.', 'Any purchase decision is entrepreneurship simply because money is spent.', 'Selecting barrel suppliers and picker contracts reflects entrepreneurship at a winery.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising resources and operations is entrepreneurship.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating production inputs and timing is entrepreneurship.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Designing how factors combine operationally is entrepreneurial work.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Spending alone is not entrepreneurship; entrepreneurship organises and combines factors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Organising inputs and contracts is entrepreneurial coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '1/5', 38, 'full' ),
( '3.1', 'CASE 3.1.39', 'Repair Shop Capital Inputs', 'Review capital and labour in a computer repair workshop. Evaluate the following economic assertions:', ARRAY['The workshop combines labour, capital, technology, and coordination to deliver repairs.', 'Answering phones converts all activity into entrepreneurship with no labour.', 'Screen replacement is capital-only because parts are tangible goods.', 'Spare parts are wants sold to customers, not capital inputs.', 'Software licences are tertiary output and cannot be factor inputs.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Service firms integrate multiple factors in delivery.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Performing repairs is labour; coordinating the firm is entrepreneurship.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Installation work is labour; parts are capital.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Parts held for service production are capital inventories.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Tools used to deliver services are technology factors.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 39, 'full' ),
( '3.1', 'CASE 3.1.40', 'Workforce and Materials in Manufacturing', 'Review whether manufacturing can run on capital alone. Evaluate the following economic assertions:', ARRAY['Plant managers coordinating shifts and suppliers supply entrepreneurship.', 'Quality inspectors monitoring batches supply skilled labour on the line.', 'Manufacturing requires engineers, operators, and materials alongside equipment.', 'Materials stored for production are combined with capital and labour.', 'Component plants run on capital alone once equipment is installed.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating production factors is entrepreneurship.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Inspection work is skilled human resource use.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Manufacturing still requires labour, materials, and coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Manufacturing uses materials alongside capital and labour.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Manufacturing integrates labour, materials, equipment, and coordination.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '1/5', 40, 'full' ),
( '3.1', 'CASE 3.1.41', 'Vineyard Land versus Barrels', 'Review land and capital distinctions in winemaking. Evaluate the following economic assertions:', ARRAY['Machinery on vineyard land is capital even though the site is agricultural.', 'Vineyard parcels and grape production draw on land as natural resources.', 'Fermentation knowledge applied to blending is a knowledge production factor.', 'River water rights used for irrigation represent natural-resource land inputs.', 'Barrels are land because oak originates from forests.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Equipment used in processing is capital, not land.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards and agricultural output relate to the land factor.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Production knowledge and experience are important factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Water sources used in production are natural resources within land.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Land is the natural-resource factor; manufactured tools, machines, barrels, and vehicles are capital even when they stand on farmland or travel outdoors.

Processed barrels used in production are capital.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 41, 'full' ),
( '3.1', 'CASE 3.1.42', 'A small IT-support venture Factor Bundle', 'Analyze the factor bundle in a laptop repair and software venture. Evaluate the following economic assertions:', ARRAY['Hands-on technical fault-finding by staff is counted as the labour factor among the firm''s resources.', 'Licensed diagnostic software and repair tools represent technology in the service model.', 'Refurbishing laptops uses spare parts inventory as capital.', 'The venture relies on entrepreneurship alone with no other factors.', 'Customer contact replaces all other factors in the venture.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible.

Support and repair work deploys skilled human resources.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Technology used to perform services is a production factor.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Inventories used to deliver services are capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Their repair and software work combines multiple production factors.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Coordination and risk-bearing are entrepreneurship.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 42, 'full' ),
( '3.1', 'CASE 3.1.43', 'Entrepreneurship versus Capital Trap', 'Review traps confusing entrepreneurship with capital. Evaluate the following economic assertions:', ARRAY['Founder vision coordinating suppliers is entrepreneurship rather than capital.', 'Cash reserves are entrepreneurship because founders control spending.', 'Entrepreneurship and capital are interchangeable labels for spending.', 'Purchasing machinery converts spending entirely into entrepreneurship.', 'Borrowed finance is entrepreneurship because borrowing shows initiative.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Vision and coordination belong to entrepreneurship, not capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Operating cash is capital; spending decisions may reflect entrepreneurship.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Capital is resources used; entrepreneurship organises those resources.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Purchasing equipment is capital use; organising purchases is entrepreneurship.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Borrowed finance used for equipment is financial capital.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 43, 'full' ),
( '3.1', 'CASE 3.1.44', 'Knowledge in Service Firms', 'Review knowledge as a factor outside manufacturing plants. Evaluate the following economic assertions:', ARRAY['Design know-how for customer software counts as knowledge in service production.', 'Coding skill deployed on client projects is skilled labour using knowledge.', 'Technology and knowledge both matter in repair and software services.', 'Training customers on backups applies knowledge through skilled labour.', 'Experience with fermentation contributes knowledge to winemaking output.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Know-how applied to deliver services is part of knowledge as a factor.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Programming work is labour applying know-how.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Service firms apply know-how and tools alongside labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Training deploys know-how via human resource work.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Production knowledge and experience are important factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 44, 'full' ),
( '3.1', 'CASE 3.1.45', 'Seasonal and Permanent Labour', 'Review labour classification for seasonal and permanent workers. Evaluate the following economic assertions:', ARRAY['Insurance handlers trained on new software supply labour in a service branch.', 'Seasonal grape pickers supply labour even when contracts last only weeks.', 'Only permanent employees can supply labour in production.', 'Freelancers replace entrepreneurship entirely in a coaching studio.', 'Specialists supply entrepreneurship only, not labour.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Office and service staff are human resources classified as labour.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Labour classification turns on whether people supply effort to production, not on contract length. Seasonal and freelance workers still count as labour while they work.

Short-term workers are human resources within the labour factor.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour means all human resources used in production — manual and office work, permanent and seasonal, manufacturing and services. Narrowing it to one contract type or workplace role misstates the factor.

Permanent and seasonal workers both supply labour.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Contractors supply labour; the organiser provides entrepreneurship.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Specialists deploying human effort are labour.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 45, 'full' ),
( '3.1', 'CASE 3.1.46', 'Factor Combination Requirement', 'Review whether businesses can rely on a single factor. Evaluate the following economic assertions:', ARRAY['Manufacturing blends labour, capital, materials, knowledge, and coordination.', 'Dominant factor emphasis in an industry removes other factors from production.', 'A firm can deliver goods using one dominant factor without combining others.', 'Services need only labour because output is intangible.', 'Winemaking needs only land because grapes ripen naturally.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

Manufacturing integrates multiple factors rather than one alone.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Businesses still combine factors even when one appears dominant.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Businesses combine multiple factors rather than one alone.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Services still rely on capital, technology, and coordination.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Winemaking also requires labour, capital, and management.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'], '2/5', 46, 'full' ),
( '3.1', 'CASE 3.1.47', 'Financial and Physical Capital', 'Review financial resources alongside physical capital. Evaluate the following economic assertions:', ARRAY['Equipment, plant, vehicles, and operating finance applied in production count as capital.', 'Entrepreneurship replaces capital once founders approve equipment purchases.', 'Leased bottling lines and hired harvesters still function as capital.', 'Working capital financing payroll between invoice cycles is financial capital.', 'Spare parts inventory for repairs is capital supporting service delivery.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Capital includes equipment and financial resources.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Purchasing equipment is capital; organising purchases is entrepreneurship.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Capital is defined by productive use of produced means of production (and operating finance), not by ownership title. Leased or hire-purchase equipment still functions as capital while in use.

Leased productive equipment still counts as capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital includes financial resources used in production — working cash and funds that bridge payroll — alongside plant and equipment.

Financial resources supporting operations are part of capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Inventories used in operations belong to capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 47, 'full' ),
( '3.1', 'CASE 3.1.48', 'Integrated Production Examples', 'Review integrated factor use across firm types. Evaluate the following economic assertions:', ARRAY['Identifying one example factor in a firm eliminates the need to consider others.', 'A small IT-support venture shows how knowledge, labour, technology, capital, and entrepreneurship work together.', 'Smartphone makers needing electronic components from suppliers rely on combined factors upstream.', 'A winemaker illustrates combining land, labour, capital, entrepreneurship, and experience.', 'A large components manufacturer illustrates capital-only production without workforce.'], ARRAY[false, true, true, true, false], ARRAY['FALSE — Factors of production are land, labour, capital, entrepreneurship, and often knowledge and technology, combined to create goods and services.

Businesses combine factors even when examples emphasise one.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing.

The venture uses skills, tools, finance, and coordination.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Component suppliers combine factors to produce inputs.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Winemaking blends multiple listed factors.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Manufacturing integrates labour, materials, equipment, and coordination.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 48, 'full' ),
( '3.1', 'CASE 3.1.49', 'Land versus Capital on One Site', 'Review land and capital distinctions on the same production site. Evaluate the following economic assertions:', ARRAY['Bottling machinery installed beside the vines is capital.', 'Harvest coordination is labour performed by grapes, not entrepreneurs.', 'Vines are wants, so vineyards are excluded from the land factor.', 'Agricultural sites use land alone without labour or equipment.', 'Pickers are land inputs because they work among vines.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process.

Equipment used in processing is capital.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it.

Coordinating harvest and equipment is entrepreneurship.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Vineyards are natural resources classified under land.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Farming and processing combine multiple factors.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Seasonal workers are human resources classified as labour.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 49, 'full' ),
( '3.1', 'CASE 3.1.50', 'Factors of Production Synthesis', 'Review integrated claims about factors of production. Evaluate the following economic assertions:', ARRAY['Businesses combine labour, land, capital, entrepreneurship, and often knowledge to create offerings.', 'A large components manufacturer illustrates combining all major factors in industrial production.', 'A refurbished-laptop venture combines knowledge, labour, technology, capital, and entrepreneurship.', 'Winemaking illustrates land-only production in agriculture.', 'Dominant factors make other factors irrelevant in analysis.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Production typically integrates multiple listed factors.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Large manufacturers integrate workforce, materials, equipment, and coordination.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Labour is the human-resources factor: time and skill deployed to create goods or services, whether the output is physical or intangible. Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Entrepreneurship organises land, labour, and capital under uncertainty. Coordinating orders, suppliers, and staffing is that organising role; buying capital or hiring labour does not erase it. Knowledge and technology count as production factors when applied to raise what the firm can produce — methods, licences, experience, and systems in services as well as manufacturing. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

The venture uses skills, tools, finance, and coordination together.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Land as a factor covers natural resources used in production — soil, vineyards, forests, fisheries, minerals, water rights — not only fenced factory plots.

Winemaking combines multiple factors beyond land.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Capital covers produced means of production used in operations: machinery, plant, vehicles, stocks of parts, and financial resources committed to the process. Businesses combine several factors; one may dominate by industry, but dominance does not delete the others. Services still use capital and organisation; automation still leaves oversight and entrepreneurship.

Dominance does not remove combined use of other factors.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 50, 'full' ),
( '3.2', 'CASE 3.2.01', 'Three-sector Model Basics', 'Review the primary, secondary, and tertiary sectors as stages from extraction through manufacturing to services. Evaluate the following economic assertions:', ARRAY['Mining ore is primary-sector activity while smelting metal ingots is secondary.', 'The tertiary sector comprises services such as banking, insurance, and coaching.', 'The primary sector covers farming, fishing, mining, and forestry extracting raw materials.', 'Banking and insurance belong to the primary sector because they are basic needs.', 'The secondary sector delivers banking and insurance services to households.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Mining is primary; smelting and manufacturing are secondary.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Tertiary activity delivers services rather than extracting or manufacturing goods.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Primary activity extracts raw materials from the earth.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking and insurance are tertiary services, not primary extraction.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking and insurance are tertiary services, not secondary manufacturing.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 1, 'full' ),
( '3.2', 'CASE 3.2.02', 'Tyrolean Ski Resort Services', 'Consider a Tyrolean ski resort hires instructors and sells lift passes to local visitors. Evaluate the following economic assertions:', ARRAY['Selling lift passes and ski instruction are tertiary services.', 'Instructors supply capital because they teach on mountain slopes.', 'Manufacturing skis on site would remain tertiary because guests consume the experience.', 'Guest services at a ski resort are primary extraction because snow is natural.', 'The resort belongs to the primary sector because it operates on a mountainside.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Recreation services and instruction are tertiary activity.

In the case setting — a Tyrolean ski resort hires instructors and sells lift passes to local visitors — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Human resources delivering services are classified as labour.

In the case setting — a Tyrolean ski resort hires instructors and sells lift passes to local visitors — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Producing physical goods from materials is secondary manufacturing.

Against the scenario (a Tyrolean ski resort hires instructors and sells lift passes to local visitors), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Natural setting does not reclassify service delivery as primary extraction.

Against the scenario (a Tyrolean ski resort hires instructors and sells lift passes to local visitors), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Location does not make a service business primary; activity type determines sector.

In the case setting — a Tyrolean ski resort hires instructors and sells lift passes to local visitors — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 2, 'full' ),
( '3.2', 'CASE 3.2.03', 'Primary Sector Activities', 'Analyze classification of primary-sector activity. Evaluate the following economic assertions:', ARRAY['A coal mine extracting ore belongs to the primary sector.', 'An olive farm harvesting and pressing oil performs primary agricultural activity.', 'Forestry concessions supplying logs to mills belong to the primary sector.', 'Milling logs into export boards at a timber mill is secondary manufacturing.', 'Commercial fishing that lands herring for sale is primary-sector extraction.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mining extracts raw materials and is primary-sector activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Growing and harvesting crops is primary-sector activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Forestry extracts natural resources and is primary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Milling into boards is secondary manufacturing.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Commercial fishing extracts natural resources and is primary activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '1/5', 3, 'full' ),
( '3.2', 'CASE 3.2.04', 'Secondary Manufacturing', 'Review what counts as secondary-sector manufacturing. Evaluate the following economic assertions:', ARRAY['Retail sale of finished jackets is tertiary distribution or trade.', 'Warehousing steel before welding is a tertiary logistics service.', 'A car plant assembling vehicles operates in the tertiary sector because it serves customers.', 'A fashion label sewing jackets performs tertiary retail because jackets are sold later.', 'Smelters shaping metal remain primary because ore originates underground.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Selling to consumers is tertiary distribution/trade.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Warehousing and logistics are tertiary services.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Vehicle assembly from processed materials is secondary manufacturing.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Garment production from materials is secondary even if products are later retailed.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore or metal into usable forms is secondary transformation.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 4, 'full' ),
( '3.2', 'CASE 3.2.05', 'Flood Rebuild and GDP', 'Consider how, after floods a municipality rebuilds bridges and the spending enters national accounts. Evaluate the following economic assertions:', ARRAY['Measured GDP can rise after ecological disasters that require infrastructure repair.', 'Construction spending on bridge rebuilds is included in GDP measurement.', 'Rebuild spending can raise measured GDP while citizen wellbeing falls.', 'GDP reflects monetary value of final goods and services produced within national borders.', 'Rebuild activity proves GDP always equals citizen wellbeing after disasters.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Disaster recovery spending increases gdp even when welfare falls.

In the case setting — how, after floods a municipality rebuilds bridges and the spending enters national accounts — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Rebuild spending adds to measured gdp.

The scenario (how, after floods a municipality rebuilds bridges and the spending enters national accounts) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp can increase from rebuilds even when underlying welfare declined.

In the case setting — how, after floods a municipality rebuilds bridges and the spending enters national accounts — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp sums final domestic production over a defined period.

The scenario (how, after floods a municipality rebuilds bridges and the spending enters national accounts) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp can rise from rebuilds even when underlying welfare declined.

Against the scenario (how, after floods a municipality rebuilds bridges and the spending enters national accounts), the claim attaches the wrong label.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'], '3/5', 5, 'full' ),
( '3.2', 'CASE 3.2.06', 'Tertiary Services Scope', 'Review the scope of tertiary-sector services. Evaluate the following economic assertions:', ARRAY['Banking branches providing loans perform tertiary financial services.', 'Remote coaching sessions sold to foreign clients are tertiary services.', 'Smelting metal ingots from ore on site is secondary manufacturing.', 'Software helpdesks troubleshooting home networks provide tertiary services.', 'Insurance cooperatives processing claims provide primary extraction services.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking is classified within the tertiary sector.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching is a service regardless of client location.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Smelting and manufacturing belong to the secondary sector.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance is a financial service, not resource extraction.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 6, 'full' ),
( '3.2', 'CASE 3.2.07', 'Emerging Economy Sector Mix', 'Analyze sector patterns in emerging economies. Evaluate the following economic assertions:', ARRAY['Heavy farming employment in less developed countries signals primary-sector dominance.', 'Primary-sector share typically shrinks as economic development advances.', 'Emerging economies show smaller primary shares than advanced EU states.', 'Emerging economies typically report tertiary output above seventy percent of GDP.', 'Advanced services above seventy percent of output characterises most emerging economies.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Emerging countries often rely heavily on primary-sector output.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Development shifts activity toward secondary and tertiary sectors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Emerging countries often rely heavily on primary-sector output.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Emerging economies depend more on primary activity, not dominant tertiary shares.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Emerging economies depend more on primary activity rather than dominant tertiary shares.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 7, 'full' ),
( '3.2', 'CASE 3.2.08', 'Olive Farm and Factory Order', 'Consider a farm selling olive oil while a factory fills an industrial production order. Evaluate the following economic assertions:', ARRAY['Fabricating electronic components transforms materials and therefore belongs to secondary manufacturing.', 'The farm is secondary because bottled oil is a processed product.', 'Both activities belong to the tertiary sector because each sells to customers.', 'Fabricating components from materials is tertiary because parts go to other businesses.', 'Harvesting and pressing olives on the farm is tertiary because oil is sold to customers.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Component production transforms materials into manufactured goods.

The scenario (a farm selling olive oil while a factory fills an industrial production order) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Agricultural production and harvesting remain primary even if some processing occurs on farm.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Selling does not reclassify farming or manufacturing into services.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing for business customers remains secondary activity.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Agricultural production remains primary even when products are sold.

Against the scenario (a farm selling olive oil while a factory fills an industrial production order), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 8, 'full' ),
( '3.2', 'CASE 3.2.09', 'Developed EU Tertiary Share', 'Review tertiary dominance in advanced European economies. Evaluate the following economic assertions:', ARRAY['Advanced EU economies are service-dominated despite the importance of food production.', 'In highly developed EU economies the tertiary sector often exceeds seventy percent of output.', 'Higher GDP per capita in EU member states links to high living standards in the model.', 'A seventy percent-plus service share reflects primary dominance in advanced economies.', 'Developed EU states keep primary output above seventy percent because food is essential.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Developed eu economies are service-dominated despite food importance.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Advanced eu countries typically see services dominate total output.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is used as a living-standard indicator.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

High tertiary shares typify advanced, not primary-dominated, economies.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

In developed eu countries the tertiary sector usually exceeds seventy percent.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 9, 'full' ),
( '3.2', 'CASE 3.2.10', 'Gross Domestic Product Definition', 'Review the definition of gross domestic product as a measure of overall economic activity within a country. Evaluate the following economic assertions:', ARRAY['GDP counts final goods and services rather than intermediate goods sold between factories.', 'GDP is usually calculated for final production within one year inside national borders.', 'GDP totals the monetary value of final goods and services produced within a country''s borders.', 'GDP measures production within borders regardless of firm nationality.', 'Final services such as insurance produced domestically enter GDP totals.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp avoids double counting by focusing on final output.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp typically refers to annual domestic final production.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp measures final domestic production over a defined period.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp is based on geography of production.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp includes final services produced within borders.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '3/5', 10, 'full' ),
( '3.2', 'CASE 3.2.11', 'EU Services at Seventy-four Percent', 'Consider a GDP report for an EU member state shows services at seventy-four percent of total output. Evaluate the following economic assertions:', ARRAY['Service share alone does not prove every component of GDP is environmentally sustainable.', 'Seventy-four percent services indicates tertiary dominance rather than primary leadership.', 'Such a share is typical for economically advanced EU countries.', 'Seventy-four percent service share fits a highly developed EU economy pattern.', 'That pattern reflects rising relative importance of tertiary activity with development.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp share does not by itself show sustainability of growth.

The scenario (a GDP report for an EU member state shows services at seventy-four percent of total output) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

The reported figure shows services dominating total output.

In the case setting — a GDP report for an EU member state shows services at seventy-four percent of total output — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

High tertiary shares characterise advanced eu states.

The scenario (a GDP report for an EU member state shows services at seventy-four percent of total output) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Advanced eu economies often exceed seventy percent tertiary output.

In the case setting — a GDP report for an EU member state shows services at seventy-four percent of total output — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

More developed economies shift toward services in the three-sector model.

In the case setting — a GDP report for an EU member state shows services at seventy-four percent of total output — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 11, 'full' ),
( '3.2', 'CASE 3.2.12', 'GDP Growth Measure', 'Analyze how GDP growth is assessed over time. Evaluate the following economic assertions:', ARRAY['GDP growth compares inflation-adjusted GDP across years.', 'Real GDP per capita can rise after stripping out inflation from nominal figures.', 'Real GDP strips price changes to compare volume of production over time.', 'Nominal GDP increases always equal real economic growth.', 'Ignoring inflation never affects growth comparisons between years.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth uses gdp adjusted for inflation.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Inflation-adjusted per capita figures support growth comparisons.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Inflation adjustment isolates real output changes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Price rises can inflate nominal gdp without real output gains.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Real comparisons generally require inflation adjustment.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '4/5', 12, 'full' ),
( '3.2', 'CASE 3.2.13', 'Remote Coaching Abroad', 'Consider an Estonian coach delivers remote training sessions to clients in other countries. Evaluate the following economic assertions:', ARRAY['Remote delivery to foreign clients keeps the activity tertiary.', 'Exporting advice does not convert coaching into secondary manufacturing.', 'Remote coaching is primary because trainers work from home offices.', 'Because no goods cross borders, the activity cannot be counted in GDP.', 'Selling coaching sessions is primary extraction because trainers work from home offices.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching remains a service regardless of client location.

The scenario (an Estonian coach delivers remote training sessions to clients in other countries) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching stays a service even when clients are abroad.

The scenario (an Estonian coach delivers remote training sessions to clients in other countries) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Home offices are locations for delivering services, not extracting raw materials.

Against the scenario (an Estonian coach delivers remote training sessions to clients in other countries), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Services produced domestically can count in home-country gdp.

In the case setting — an Estonian coach delivers remote training sessions to clients in other countries — the sentence mislabels the category or overreaches.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching advice is a service output, not extraction of natural resources.

Against the scenario (an Estonian coach delivers remote training sessions to clients in other countries), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 13, 'full' ),
( '3.2', 'CASE 3.2.14', 'Coal Mine and Car Plant Quarter', 'Consider a Romanian coal mine and a Graz car plant report output in the same quarter. Evaluate the following economic assertions:', ARRAY['Coal extraction at the mine is primary-sector activity.', 'Vehicle assembly at the car plant is secondary manufacturing.', 'Steel inputs from mining do not make vehicle assembly primary activity.', 'Office staff at a mine or plant do not reclassify core production into tertiary services.', 'Both plants belong to the tertiary sector because they employ office staff.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mining extracts raw materials and is primary activity.

The scenario (a Romanian coal mine and a Graz car plant report output in the same quarter) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Assembling cars from materials is secondary activity.

The scenario (a Romanian coal mine and a Graz car plant report output in the same quarter) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Assembly of vehicles is secondary even if inputs came from mining.

The scenario (a Romanian coal mine and a Graz car plant report output in the same quarter) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Core extraction and manufacturing sectors remain primary and secondary.

In the case setting — a Romanian coal mine and a Graz car plant report output in the same quarter — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Office staff do not reclassify extraction or manufacturing into services.

In the case setting — a Romanian coal mine and a Graz car plant report output in the same quarter — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 14, 'full' ),
( '3.2', 'CASE 3.2.15', 'GDP Income Coverage Critique', 'Review criticisms that GDP misses some income. Evaluate the following economic assertions:', ARRAY['GDP omission of some income sources is one reason its use is debated.', 'Every barter transaction is always fully recorded in official GDP.', 'Unpaid home maintenance done by owners is always included in GDP.', 'GDP fully captures household volunteering and unpaid care in its totals.', 'Household volunteering and unpaid care are always counted in official GDP totals.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Incomplete income coverage contributes to gdp criticism.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Informal and non-market activity is often missed by gdp.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Non-market unpaid work is typically outside gdp scope.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Unpaid care work typically falls outside gdp measurement boundaries.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Volunteer labour is generally excluded from official gdp aggregates.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '4/5', 15, 'full' ),
( '3.2', 'CASE 3.2.16', 'Insurance Branch and Wheat Farm', 'Consider an insurance cooperative processes claims while a nearby farm harvests wheat. Evaluate the following economic assertions:', ARRAY['Farm output and insurance services can coexist as primary and tertiary activity.', 'Both operations are tertiary because each serves customers.', 'Claims handling at the insurance branch is primary because policies cover basic risks.', 'Harvesting wheat is secondary manufacturing because flour milling follows.', 'Wheat farming is secondary because grain is processed into flour elsewhere.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Different sectors operate side by side in the same economy.

The scenario (an insurance cooperative processes claims while a nearby farm harvests wheat) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Customer service does not make farming tertiary.

Against the scenario (an insurance cooperative processes claims while a nearby farm harvests wheat), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance is a financial service, not resource extraction.

Against the scenario (an insurance cooperative processes claims while a nearby farm harvests wheat), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Farming wheat from land is primary agriculture, not secondary manufacturing.

In the case setting — an insurance cooperative processes claims while a nearby farm harvests wheat — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Grain harvesting remains primary even when processed into flour later.

In the case setting — an insurance cooperative processes claims while a nearby farm harvests wheat — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 16, 'full' ),
( '3.2', 'CASE 3.2.17', 'Sustainability and GDP Quality', 'Review GDP as an indicator of sustainable or high-quality growth. Evaluate the following economic assertions:', ARRAY['GDP does not tell whether growth damages resources or wellbeing.', 'GDP alone reveals little about the quality or sustainability of economic growth.', 'Rebuilds after disasters can raise GDP without improving quality of life.', 'Rising GDP may coincide with pollution or resource depletion.', 'Quality concerns are unrelated to debates about GDP as a welfare measure.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp misses quality and sustainability dimensions critics highlight.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp does not by itself show sustainability or quality of growth.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Measured output can rise while welfare remains impaired.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Output can grow without environmental improvement.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Quality and sustainability are standard gdp criticisms.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '3/5', 17, 'full' ),
( '3.2', 'CASE 3.2.18', 'Port Warehouse and Shipyard', 'Consider a port warehouse stores imported steel before a shipyard welds hull sections. Evaluate the following economic assertions:', ARRAY['Mining origins of steel do not make warehousing or shipbuilding primary.', 'The chain shows tertiary logistics feeding secondary production.', 'Welding hull sections at the shipyard is secondary manufacturing.', 'Building ships from steel plate is secondary manufacturing.', 'Warehousing imported steel before fabrication is a tertiary logistics service.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Downstream storage and shipbuilding are not primary extraction.

In the case setting — a port warehouse stores imported steel before a shipyard welds hull sections — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Services can support manufacturing downstream.

In the case setting — a port warehouse stores imported steel before a shipyard welds hull sections — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Welding hull sections transforms materials into manufactured vessels.

The scenario (a port warehouse stores imported steel before a shipyard welds hull sections) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Ship construction from steel plate counts as secondary manufacturing output.

In the case setting — a port warehouse stores imported steel before a shipyard welds hull sections — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Storage and logistics are tertiary services.

The scenario (a port warehouse stores imported steel before a shipyard welds hull sections) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '1/5', 18, 'full' ),
( '3.2', 'CASE 3.2.19', 'Clinic Expansion and Real GDP', 'Consider a Prague clinic expands while real GDP per capita rises after inflation adjustment. Evaluate the following economic assertions:', ARRAY['Real GDP per capita rising after inflation adjustment indicates real growth.', 'Basic need status does not reclassify healthcare delivery as primary activity.', 'Nominal GDP increases alone do not prove real growth without price adjustment.', 'Clinic growth is primary because health is a basic need.', 'Healthcare expansion cannot occur while real GDP per capita rises.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Inflation-adjusted gdp supports real growth comparisons.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Healthcare provision is tertiary service activity.

The scenario (a Prague clinic expands while real GDP per capita rises after inflation adjustment) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth requires adjusting for inflation.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Healthcare provision is tertiary service activity.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Sector activity contributes to overall measured gdp growth.

In the case setting — a Prague clinic expands while real GDP per capita rises after inflation adjustment — the sentence mislabels the category or overreaches.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '3/5', 19, 'full' ),
( '3.2', 'CASE 3.2.20', 'Disaster Rebuild GDP Effect', 'Review how disaster recovery affects measured GDP. Evaluate the following economic assertions:', ARRAY['Rebuilding infrastructure after ecological damage can raise measured GDP.', 'Recovery and rebuild spending adds to measured output.', 'GDP rising after disasters proves living standards improved.', 'Cleanup spending automatically reduces GDP because it repairs harm.', 'Disaster rebuilds exclude construction wages from GDP to avoid counting damage twice.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Reconstruction outlays enter gdp as new final expenditure.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Repair and rebuild contracts add to measured national output totals.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp may rise from rebuilds without restoring lost welfare.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Recovery and rebuild spending adds to measured output.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Rebuild spending is included and can raise gdp.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 20, 'full' ),
( '3.2', 'CASE 3.2.21', 'Fishing Fleet and Fashion Label', 'Consider a fishing fleet lands herring while a fashion label sews jackets from imported fabric. Evaluate the following economic assertions:', ARRAY['Garment manufacturing from imported fabric is secondary activity.', 'Landing herring for sale is primary-sector fishing activity.', 'Onboard filleting converts commercial fishing into secondary processing.', 'Both firms are primary because they use natural or imported inputs.', 'Fashion sewing is tertiary because designs are creative services.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Garment production from materials is secondary activity.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Commercial fishing extracts resources and is primary activity.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Extracting fish remains primary-sector activity.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Garment manufacturing is secondary, not primary.

In the case setting — a fishing fleet lands herring while a fashion label sews jackets from imported fabric — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Sewing garments is manufacturing in the secondary sector.

Against the scenario (a fishing fleet lands herring while a fashion label sews jackets from imported fabric), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 21, 'full' ),
( '3.2', 'CASE 3.2.22', 'A small IT-support venture Sector Classification', 'Analyze how to classify a small IT-support venture''s trading, software, and support activities. Evaluate the following economic assertions:', ARRAY['Developing software for customers is tertiary service activity.', 'Refurbishing laptops and providing support are tertiary service activities.', 'A small IT-support venture trade goods, develop software, and provide technical support in the tertiary sector.', 'Minerals inside devices do not reclassify their support activity as primary extraction.', 'Handling physical laptops does not move their support work into secondary manufacturing.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Software services are tertiary, not manufacturing, in this context.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Repair and support are tertiary service activities.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Their activities are classified as services in the tertiary sector.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Using devices does not make their support activity primary.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Repair and support are services even when goods are involved.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 22, 'full' ),
( '3.2', 'CASE 3.2.23', 'Mining Pit and Smelters Chain', 'Consider a mining pit extracts ore while downstream smelters shape metal for machinery plants. Evaluate the following economic assertions:', ARRAY['Smelters shaping metal perform secondary transformation.', 'Smelting ore into metal stays primary extraction rather than secondary processing.', 'The entire chain from pit to machinery is primary because metal is natural.', 'Every downstream step from pit to machinery counts as primary because metal is natural.', 'Smelting remains primary because ore comes directly from the earth.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore into metal is secondary activity.

In the case setting — a mining pit extracts ore while downstream smelters shape metal for machinery plants — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore into metal is secondary transformation.

Against the scenario (a mining pit extracts ore while downstream smelters shape metal for machinery plants), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Smelting transforms extracted ore; only pit extraction is primary.

Against the scenario (a mining pit extracts ore while downstream smelters shape metal for machinery plants), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Machinery assembly downstream is secondary, not primary extraction.

Against the scenario (a mining pit extracts ore while downstream smelters shape metal for machinery plants), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Natural origin of ore does not keep smelting in the primary sector.

In the case setting — a mining pit extracts ore while downstream smelters shape metal for machinery plants — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 23, 'full' ),
( '3.2', 'CASE 3.2.24', 'Inflation-adjusted Growth', 'Analyze the role of inflation adjustment in GDP growth. Evaluate the following economic assertions:', ARRAY['Comparing GDP across years requires adjusting for inflation to measure real growth.', 'Inflation adjustment is generally required for meaningful real growth comparisons.', 'Nominal and real growth align closely when prices are stable.', 'Ignoring inflation can overstate growth when prices rise faster than output.', 'Real GDP includes all price changes when comparing production over time.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth uses inflation-adjusted gdp.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Real comparisons generally require inflation adjustment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

With stable prices nominal and real growth align closely.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Nominal figures can inflate apparent growth without real gains.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Real growth uses gdp adjusted for inflation.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '3/5', 24, 'full' ),
( '3.2', 'CASE 3.2.25', 'Bookstore Distribution Branch', 'Consider a bookstore branch distributes publishers'' titles to local readers. Evaluate the following economic assertions:', ARRAY['Printing the titles at a publisher''s plant is secondary manufacturing.', 'Retail trade of printed titles is tertiary activity.', 'Distributing publishers'' titles to readers is tertiary distribution activity.', 'Book sales are secondary because books are physical products.', 'Reading promotion events turn bookstores into primary agriculture.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Printing books is manufacturing in the secondary sector.

In the case setting — a bookstore branch distributes publishers'' titles to local readers — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail trade of goods is tertiary activity.

In the case setting — a bookstore branch distributes publishers'' titles to local readers — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution to customers is tertiary-sector activity.

The scenario (a bookstore branch distributes publishers'' titles to local readers) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Retail and distribution of goods are tertiary even for physical products.

In the case setting — a bookstore branch distributes publishers'' titles to local readers — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Book-related services remain tertiary.

Against the scenario (a bookstore branch distributes publishers'' titles to local readers), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 25, 'full' ),
( '3.2', 'CASE 3.2.26', 'Well-being Correlation', 'Review GDP correlation with health and happiness indicators. Evaluate the following economic assertions:', ARRAY['GDP is often correlated with indicators such as health status and happiness.', 'Higher GDP frequently aligns with better health and happiness scores.', 'GDP critics still note correlation with some wellbeing measures.', 'Correlation implies GDP captures every aspect of wellbeing perfectly.', 'Cross-country data show no link between GDP and health outcomes.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Wealthier economies often report better health and happiness indicators on average.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Rising gdp per capita commonly tracks improved wellbeing metrics in cross-country data.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

The text acknowledges correlation despite gdp limits.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Correlation does not mean gdp fully measures welfare.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp is usually correlated with wellbeing indicators.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '3/5', 26, 'full' ),
( '3.2', 'CASE 3.2.27', 'Forestry and Furniture Plant', 'Consider a forestry concession supplies logs to a furniture plant finishing dining tables. Evaluate the following economic assertions:', ARRAY['The link illustrates primary output feeding secondary production.', 'Finishing tables for dining rooms is tertiary because buyers are households.', 'Furniture finishing is tertiary because it serves home customers.', 'Both stages are secondary because furniture is sold to households.', 'Logging and furniture making are both secondary because output is sold retail.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Primary extraction commonly supplies secondary manufacturers.

The scenario (a forestry concession supplies logs to a furniture plant finishing dining tables) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Household buyers do not shift furniture making from secondary to tertiary.

In the case setting — a forestry concession supplies logs to a furniture plant finishing dining tables — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Table finishing at a plant is manufacturing, not a service to consumers.

In the case setting — a forestry concession supplies logs to a furniture plant finishing dining tables — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Logging is primary resource use; furniture making is a separate secondary stage.

Against the scenario (a forestry concession supplies logs to a furniture plant finishing dining tables), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail sale of furniture does not reclassify logging as secondary activity.

In the case setting — a forestry concession supplies logs to a furniture plant finishing dining tables — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 27, 'full' ),
( '3.2', 'CASE 3.2.28', 'Secondary Manufacturing Role', 'Review a manufacturer producing electronic components for industrial buyers. Evaluate the following economic assertions:', ARRAY['Client technical advice alongside fabrication does not remove secondary classification.', 'Manufactured components are secondary-sector output regardless of input origins.', 'Selling components to smartphone makers keeps fabrication in secondary manufacturing.', 'Transforming raw materials into finished components is secondary manufacturing.', 'The manufacturer is tertiary because it sells to smartphone makers, not final consumers.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Fabricating goods remains secondary even if advice accompanies sales.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufactured components are secondary-sector output.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing for business customers remains secondary activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing components from materials is secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Selling to firms does not reclassify manufacturing as services.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 28, 'full' ),
( '3.2', 'CASE 3.2.29', 'Sector Assignment Traps', 'Review subtle sector misclassification traps. Evaluate the following economic assertions:', ARRAY['Retail distribution of finished goods belongs to the tertiary sector.', 'A software helpdesk is tertiary even when supporting manufactured devices.', 'Manufacturing and after-sales service mean the entire firm is tertiary.', 'Printing books and bookstore distribution are both secondary.', 'After-sales repair makes the entire firm tertiary only.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution is a service activity within the tertiary sector.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

A firm may run secondary production and tertiary services simultaneously.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing and distribution occupy different sectors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

After-sales repair is tertiary but does not erase manufacturing classification.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 29, 'full' ),
( '3.2', 'CASE 3.2.30', 'GDP Border Rule', 'Analyze the geographic rule for GDP measurement. Evaluate the following economic assertions:', ARRAY['GDP measures production within a country''s borders regardless of firm nationality.', 'Final goods produced domestically within a year enter GDP totals.', 'Output from a domestic plant of a foreign-owned firm counts in that country''s GDP.', 'Foreign production by domestic firms is counted where it occurs, not in home GDP.', 'Territorial production location determines GDP inclusion.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

National gdp counts output produced inside territorial borders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Domestic final production in the period is counted.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Location of production determines gdp inclusion.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Foreign production is counted where it occurs, not in home gdp.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Geographic location of production determines which country records the output.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '3/5', 30, 'full' ),
( '3.2', 'CASE 3.2.31', 'Quality of Growth Critique', 'Review limits of GDP regarding growth quality. Evaluate the following economic assertions:', ARRAY['Disaster rebuild spending can lift GDP without restoring lost wellbeing.', 'Quality concerns are part of why GDP use is debated.', 'GDP totals value produced without automatically distinguishing harmful from beneficial output.', 'GDP does not show whether growth improves environmental conditions.', 'Rising GDP necessarily proves growth is environmentally sustainable.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Measured output can rise while welfare remains impaired.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Quality and sustainability are standard gdp criticisms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp totals value produced, not whether output is beneficial.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp does not by itself show sustainability or quality.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp does not by itself show sustainability or quality.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '3/5', 31, 'full' ),
( '3.2', 'CASE 3.2.32', 'Banking as Tertiary', 'Review banking within the three-sector model. Evaluate the following economic assertions:', ARRAY['Banking branches providing loans are tertiary financial services.', 'Money used in banking is not classified as a natural resource making banking primary.', 'A national bank serving only home customers becomes secondary.', 'Insurance and banking both belong to the secondary sector.', 'Banking is secondary because it funds manufacturing clients.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking is classified within the tertiary sector.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Banking is a financial service, not resource extraction.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Financial services stay tertiary regardless of customer location.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Financial services are tertiary activity.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Financing manufacturers does not turn banking into manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 32, 'full' ),
( '3.2', 'CASE 3.2.33', 'Shipbuilding Sector Type', 'Analyze how to classify shipyard activity in the three-sector model. Evaluate the following economic assertions:', ARRAY['Steel import storage and hull welding occupy different sectors.', 'Later cargo transport at sea does not reclassify shipbuilding as tertiary.', 'Port warehousing before welding is tertiary logistics.', 'Painting finished hulls for delivery remains secondary manufacturing support.', 'Welding hull sections from steel plate is secondary manufacturing.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Warehousing is tertiary; welding is secondary.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Building ships is manufacturing, not service delivery.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Storage before manufacturing is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Finishing manufactured vessels remains secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Building ships from materials is secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 33, 'full' ),
( '3.2', 'CASE 3.2.34', 'Service Share Measurement', 'Analyze measuring tertiary share in total output. Evaluate the following economic assertions:', ARRAY['Advanced economies often see services dominate total output shares.', 'Tertiary share is measured separately from GDP totals.', 'Primary share above seventy percent typifies rich EU economies.', 'Service share alone identifies every firm''s sector classification.', 'Less developed economies typically show smaller primary shares than advanced EU states.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

High service shares show tertiary dominance in advanced economies.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Sector shares are derived from gdp output breakdowns.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

High tertiary, not primary, shares typify advanced eu states.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Aggregate shares differ from individual firm sector labels.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Less developed countries depend more on primary activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 34, 'full' ),
( '3.2', 'CASE 3.2.35', 'GDP as an Economic Activity Indicator', 'Review GDP as an overall activity indicator. Evaluate the following economic assertions:', ARRAY['GDP per capita is commonly used as an indicator of living standards.', 'GDP does not replace all other indicators because it misses some income sources.', 'GDP counts final goods and services produced in a defined period.', 'GDP excludes final services such as insurance from its totals.', 'Insurance and other final services are omitted from official GDP totals.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is linked to living standards.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp misses some informal and unpaid activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp covers final domestic production over time.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Final insurance premiums and claims services enter gdp when produced domestically.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Service-sector final output is included when it meets gdp boundary rules.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '3/5', 35, 'full' ),
( '3.2', 'CASE 3.2.36', 'Retail Sector Trap', 'Review traps when classifying retail activity. Evaluate the following economic assertions:', ARRAY['A bookstore selling printed titles performs tertiary retail distribution.', 'Warehouse pick-and-pack for e-commerce orders is classified as a tertiary logistics activity.', 'Mixed manufacturing and retail in one firm can span secondary and tertiary activity.', 'Physical goods sold in shops do not automatically make retail secondary.', 'Printing the titles is secondary while selling them is tertiary.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail trade of goods is tertiary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Fulfilment services are tertiary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Mixed firms can span secondary production and tertiary retail.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution and retail are tertiary even for physical products.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing and retail occupy different sectors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 36, 'full' ),
( '3.2', 'CASE 3.2.37', 'Software Support Sector Trap', 'Review sector traps around software support services. Evaluate the following economic assertions:', ARRAY['A small IT-support venture''s technical support is tertiary even when tied to refurbished goods.', 'Remote support abroad remains tertiary when produced domestically.', 'Software helpdesks troubleshooting networks provide tertiary services.', 'Writing code for clients is secondary manufacturing.', 'Support is secondary because computers are manufactured products.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Support services remain tertiary when linked to goods.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Client location does not reclassify domestic tertiary services.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Software services are tertiary in this context.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Supporting devices is tertiary, not manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 37, 'full' ),
( '3.2', 'CASE 3.2.38', 'Multi-sector Firms', 'Analyze firms operating across more than one sector. Evaluate the following economic assertions:', ARRAY['The three-sector model classifies activities rather than assigning one label per economy.', 'A farm selling produce can only be classified as primary.', 'A manufacturer that also gives client advice is tertiary only.', 'A single sector label on a firm blocks any activity in another sector.', 'One sector label applied to a firm prevents any activity in another sector.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

The model classifies activities, not single labels per economy.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mixed-sector firms may combine farming with processing or retail activities.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing can coexist with service offerings.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Sector labels describe activities, not exclusive limits on what a firm may do.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Classification by activity allows several sector types within one enterprise.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 38, 'full' ),
( '3.2', 'CASE 3.2.39', 'Output Share Shifts', 'Analyze how sector output shares shift with development. Evaluate the following economic assertions:', ARRAY['Emerging countries typically depend heavily on primary activity before tertiary dominance emerges.', 'Tertiary dominance in EU states coexists with some primary and secondary output.', 'Primary share often falls as countries become more developed.', 'Economic development advancing tends to raise relative tertiary output.', 'Secondary and tertiary shares must both fall as primary share falls.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Emerging economies typically depend heavily on primary activity first.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Advanced economies still contain all sectors, with tertiary largest.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Advanced economies rely less on primary output shares.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

More developed economies shift toward services.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Development reallocates activity among sectors over time.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '1/5', 39, 'full' ),
( '3.2', 'CASE 3.2.40', 'Standard of Living Link', 'Review linking GDP per capita to living standards. Evaluate the following economic assertions:', ARRAY['Living standards correlate with GDP though GDP misses some welfare dimensions.', 'Per capita averages miss distribution of income within a country.', 'GDP per capita fully captures inequality within a country.', 'Higher GDP per capita in EU members is unrelated to living standards.', 'Low GDP per capita alone defines an emerging economy''s entire sector mix.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Correlation exists despite gdp limits.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sector classification follows the stage of activity — extraction, manufacturing, or services — not whether the output feels basic or where the premises sit.

Per capita averages miss distribution of income.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Per capita averages miss distribution of income.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is linked to living standards.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Sector mix patterns are tendencies, not single indicators.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '3/5', 40, 'full' ),
( '3.2', 'CASE 3.2.41', 'Classifying Industrial Fabrication', 'Analyze how to classify industrial fabrication in the sector model. Evaluate the following economic assertions:', ARRAY['Client advice alongside fabrication does not remove secondary classification.', 'Advice to clients converts fabrication into tertiary services only.', 'Buying mined metals as inputs turns factory fabrication into primary extraction.', 'Testing products in the factory becomes a tertiary inspection service only.', 'Buying mined materials for production does not move manufacturing from secondary to primary.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing remains secondary even if services accompany sales.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing remains secondary even if services accompany sales.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Component fabrication stays secondary whatever raw materials are purchased.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Quality steps in manufacturing stay secondary activity.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Input from mines does not change the secondary nature of manufacturing.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 41, 'full' ),
( '3.2', 'CASE 3.2.42', 'Insurance Sector Type', 'Review insurance within tertiary services. Evaluate the following economic assertions:', ARRAY['Insurance cooperatives processing claims provide tertiary services.', 'Underwriting and claims payment are tertiary financial services.', 'Claims handling is tertiary whether the client is a farm or a factory.', 'Insurance is primary because policies cover basic risks.', 'Insurance tied to manufactured goods becomes secondary.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance is a financial service in the tertiary sector.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Core insurance operations are tertiary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance services are tertiary for all customer types.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Risk coverage is a financial service, not resource extraction.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Insurance remains tertiary regardless of what policies cover.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 42, 'full' ),
( '3.2', 'CASE 3.2.43', 'Clothing Production Sector', 'Analyze how to classify garment production and sales. Evaluate the following economic assertions:', ARRAY['Fashion retail selling finished jackets is tertiary trade.', 'Designing jackets can be tertiary while sewing them is secondary.', 'Imported fabric entering a sewing floor supports secondary manufacturing.', 'Sewing garments is secondary even when fashion is sold as a consumer experience.', 'Sewing jackets from imported fabric is secondary manufacturing.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Retail distribution is tertiary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Design services can be tertiary; sewing is manufacturing.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Manufacturing uses imported materials in secondary production.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Sewing garments is secondary manufacturing.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Garment production from materials is secondary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 43, 'full' ),
( '3.2', 'CASE 3.2.44', 'Coaching as Tertiary', 'Review coaching within the tertiary sector. Evaluate the following economic assertions:', ARRAY['Remote coaching sessions sold to clients are tertiary services.', 'Exporting coaching abroad keeps the activity tertiary.', 'Coaching combined with merchandise sales can still be tertiary service delivery.', 'Coaching studios renting space and paying trainers deliver tertiary services.', 'Designing training programmes is secondary manufacturing.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Coaching is a service classified in the tertiary sector.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Client location does not reclassify domestic tertiary services.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Core coaching remains tertiary even if goods are sold.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Personal coaching is tertiary-sector activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Design services are tertiary; book printing is secondary.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 44, 'full' ),
( '3.2', 'CASE 3.2.45', 'Distribution Services', 'Review distribution and logistics as tertiary activity. Evaluate the following economic assertions:', ARRAY['Picking and dispatching online orders from a warehouse belongs to tertiary logistics services.', 'Retail distribution of finished goods to shops is tertiary trade.', 'Warehousing is secondary because steel will be manufactured.', 'Bookstores are secondary because books are printed products.', 'Physical goods make distribution secondary manufacturing.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Fulfilment services are tertiary activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Distribution to customers is tertiary-sector activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Warehousing before manufacturing is tertiary logistics.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Distribution to readers is tertiary activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Distribution is tertiary even when goods are physical.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 45, 'full' ),
( '3.2', 'CASE 3.2.46', 'Raw Material Extraction', 'Analyze primary-sector extraction activities. Evaluate the following economic assertions:', ARRAY['Forestry supplying logs to mills is primary extraction.', 'Olive farms harvesting crops perform primary agricultural activity.', 'Farming, fishing, mining, and forestry extract raw materials in the primary sector.', 'Coal mining extracting ore is primary-sector activity.', 'Fishing becomes secondary once fish are filleted onboard.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Forestry extracts timber as a natural resource.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Crop production is primary-sector activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Primary activity extracts raw materials from the earth.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Mining extracts raw materials and is primary activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Extracting fish remains primary-sector activity.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 46, 'full' ),
( '3.2', 'CASE 3.2.47', 'Transforming Raw Materials', 'Review secondary-sector transformation. Evaluate the following economic assertions:', ARRAY['Timber mills exporting boards perform secondary processing of logs.', 'Fabricating industrial components is tertiary because components support services.', 'Sewing is tertiary because fashion is a consumer service.', 'Smelting remains primary because ore comes from mines.', 'Shipbuilding is tertiary because ships later carry cargo.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Milling logs into boards is secondary manufacturing.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing components is secondary activity.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Sewing garments is secondary manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods.

Processing ore or metal is secondary transformation.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Building ships from materials is secondary manufacturing.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 47, 'full' ),
( '3.2', 'CASE 3.2.48', 'EU Tertiary Dominance', 'Review tertiary dominance in advanced EU economies. Evaluate the following economic assertions:', ARRAY['As economies develop, relative tertiary output tends to increase.', 'Higher GDP per capita in EU members links to high living standards in the model.', 'Primary food production dominates output in rich EU states.', 'High tertiary shares typify emerging economies with low GDP per capita.', 'Developed EU states keep primary output above seventy percent.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

More developed economies shift toward services in the three-sector model.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp per capita is used as a living-standard indicator.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

Developed eu economies show tertiary dominance, not primary dominance.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods. GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

High tertiary shares characterise advanced, not emerging, economies.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services.

In developed eu countries the tertiary sector usually exceeds seventy percent.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 48, 'full' ),
( '3.2', 'CASE 3.2.49', 'Sector Trap Software Support', 'Review sector traps around software support. Evaluate the following economic assertions:', ARRAY['Refurbished-goods support from a small IT-support venture remains tertiary service activity.', 'Remote support to foreign clients remains tertiary.', 'Network troubleshooting by software helpdesks counts as tertiary service activity.', 'Manufacturing devices and supporting them can span secondary and tertiary activity.', 'Writing client software is tertiary service activity.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Support services remain tertiary when linked to goods.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Client location does not reclassify domestic tertiary services.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Technical support is a tertiary service.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing is secondary; support is tertiary alongside it.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Software services are tertiary in this context.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 49, 'full' ),
( '3.2', 'CASE 3.2.50', 'Sector and GDP Synthesis', 'Review integrated sector and GDP claims. Evaluate the following economic assertions:', ARRAY['Emerging economies depend largely on primary activity while advanced EU states show tertiary dominance.', 'GDP measures final domestic production and supports growth comparisons when inflation-adjusted.', 'GDP critics note missing income, quality limits, and disaster rebuild effects.', 'GDP correlates perfectly with health and happiness in every case.', 'Manufacturing components and offering after-sales support collapse into a single tertiary label.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Primary-sector activity extracts raw materials from nature: farming, fishing, mining, and forestry — not manufacturing and not services. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Development shifts sector shares toward services in rich economies.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Gdp totals final output; real growth uses adjusted figures.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Standard criticisms include coverage, quality, and rebuild distortions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — GDP measures the monetary value of final goods and services produced within national borders. Rebuild spending can raise measured GDP even when wellbeing falls; GDP is not a welfare index.

Correlation does not mean gdp fully measures welfare.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Secondary-sector activity processes and manufactures: smelting, assembling, milling, and similar transformation of materials into goods. Tertiary-sector activity provides services — banking, insurance, coaching, retail, tourism services — rather than extracting materials or manufacturing goods.

Manufacturing stays secondary; support can be tertiary alongside it.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '3/5', 50, 'full' ),
( '3.3', 'CASE 3.3.01', 'Profit-oriented Basics', 'Review how profit-oriented businesses relate revenues to costs and expenses. Evaluate the following economic assertions:', ARRAY['Strong customer demand alone guarantees profit regardless of expenses.', 'Break-even performance is the primary long-run goal of most profit-oriented manufacturers.', 'Recording revenue without controlling costs satisfies the profit objective.', 'Profit means matching expenses exactly while ignoring any surplus.', 'Covering costs alone is the usual long-run goal of profit-oriented manufacturers.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit compares revenue with total costs and expenses. Strong demand raises the chance of sales, but costs can still erase any surplus.

Rising costs can erase profit despite revenue.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit-oriented firms seek surplus above break-even.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit requires revenues to exceed costs, not revenue alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit requires revenues to exceed costs and expenses.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit-oriented firms aim for revenue above costs to grow and reward risk.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 1, 'full' ),
( '3.3', 'CASE 3.3.02', 'Bakery Oven Reinvestment', 'Consider a bakery chain targets revenue above costs to fund new ovens in a growing shop. Evaluate the following economic assertions:', ARRAY['Seeking revenue above costs to buy new ovens reflects profit-oriented reinvestment logic.', 'Retained surplus from profitable sales can finance equipment upgrades.', 'The shop treats higher revenue than expenses as the basis for buying new ovens.', 'Durability requires distributing all earnings immediately to owners.', 'Oven purchases must come from donations rather than business surplus.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit funds capital renewal in commercial firms.

In the case setting — a bakery chain targets revenue above costs to fund new ovens in a growing shop — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit enables reinvestment in commercial businesses.

The scenario (a bakery chain targets revenue above costs to fund new ovens in a growing shop) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit orientation links surplus to reinvestment.

In the case setting — a bakery chain targets revenue above costs to fund new ovens in a growing shop — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvestment also supports long-run business sustainability.

In the case setting — a bakery chain targets revenue above costs to fund new ovens in a growing shop — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Commercial firms reinvest profit into equipment.

Against the scenario (a bakery chain targets revenue above costs to fund new ovens in a growing shop), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 2, 'full' ),
( '3.3', 'CASE 3.3.03', 'Revenue versus Costs', 'Analyze the revenue-versus-cost relationship in profit orientation. Evaluate the following economic assertions:', ARRAY['Cost control matters because profit compares revenue with total expenses.', 'Commercial expansion often relies on profit rather than persistent losses.', 'Margin above break-even allows commercial firms to expand operations.', 'Profit emerges when revenue exceeds total costs in a period.', 'Profit orientation requires revenues to exceed costs and expenses.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Both revenue and costs determine profit outcomes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Commercial expansion relies on profit, not persistent losses.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Surplus above costs supports growth in profit-oriented firms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Margin appears only when revenue exceeds costs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit means higher revenues than total costs.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 3, 'full' ),
( '3.3', 'CASE 3.3.04', 'Disaster Relief Funding', 'Consider a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns. Evaluate the following economic assertions:', ARRAY['Charging a cost-recovery fee for some supplies converts a humanitarian NPO into a profit-maximising firm.', 'Any surplus from donations can be reinvested into further relief work.', 'Not-for-profit status means the organisation may ignore funding entirely.', 'Dispatching kits without prior inflows is typical NPO practice.', 'Relief organisations need no inflows because volunteers supply everything.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Cost recovery does not redefine a humanitarian npo as profit-oriented.

In the case setting — a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses are typically reinvested into the mission.

The scenario (a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos must still secure and manage revenues or donations.

Against the scenario (a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Relief delivery requires funding for materials and logistics.

Against the scenario (a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Humanitarian delivery requires funded materials and logistics.

In the case setting — a humanitarian NPO collecting donations before dispatching flood-relief kits to affected towns — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 4, 'full' ),
( '3.3', 'CASE 3.3.05', 'Profit Reinvestment', 'Review reinvestment of profit in commercial firms. Evaluate the following economic assertions:', ARRAY['Profits can fund new equipment that improves future service capacity.', 'Retained profit can be reinvested to improve durability and sustainability of a business.', 'Reinvestment supports long-run survival alongside owner returns.', 'Repair shops reinvesting profit into diagnostic tools show commercial reinvestment.', 'Profit cannot fund equipment because it must be distributed immediately.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Reinvested profit supports capital renewal.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens long-run business capacity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvestment supports durability and future returns.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained profit funds capital renewal in profit-oriented firms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profits can be reinvested in the business.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'], '1/5', 5, 'full' ),
( '3.3', 'CASE 3.3.06', 'Merchandise and Mission Funding', 'Consider a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection. Evaluate the following economic assertions:', ARRAY['Selling merchandise can raise funds for habitat work within an NPO model.', 'Merchandise income helps cover operating costs while funding conservation work.', 'Habitat work funded from surplus proves the organisation maximises owner wealth.', 'A conservation NPO seeks maximum private owner wealth like a listed corporation.', 'A conservation NPO must distribute merchandise surplus as private shareholder dividends.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Trading can fund mission activities within an npo.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Trading can supplement donations to cover mission costs.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Merchandising surpluses can fund mission work without implying owner profit-maximisation.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

A conservation npo is mission-driven and not organised to maximise private owner wealth.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses support mission reinvestment, not owner payouts.

In the case setting — a conservation NPO that sells branded merchandise and ploughs surplus into habitat protection — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 6, 'full' ),
( '3.3', 'CASE 3.3.07', 'Owner and Investor Reward', 'Review profit as reward for owners and investors. Evaluate the following economic assertions:', ARRAY['Investors treat retained profit as reward for capital placed at risk.', 'Owner return logic treats profit as payoff for committing capital to uncertain ventures.', 'Profit orientation excludes any return to owners because customers pay prices.', 'Profits reward owners and investors for the risk they have taken.', 'Owners deserve no return when revenues exceed expenses.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit compensates owners and investors for risk taken.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit compensates owners for capital risk.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors expect reward when revenues exceed costs.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Returns compensate capital providers for bearing business risk.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors expect profit as reward for risk.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 7, 'full' ),
( '3.3', 'CASE 3.3.08', 'Startup Founder Risk', 'Consider startup founders who expect profit as compensation for the risk they have invested. Evaluate the following economic assertions:', ARRAY['Investors bear no risk in startups because lenders absorb all uncertainty.', 'Startups are NPOs because early years may show low margins.', 'Covering costs fully removes any need to reward risk-bearing owners.', 'Profit has no connection to capital placed at risk.', 'Risk-bearing founders should expect no return when revenues exceed expenses.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors bear risk rewarded by profit.

The scenario (startup founders who expect profit as compensation for the risk they have invested) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Profit orientation depends on aims, not temporary margin levels.

In the case setting — startup founders who expect profit as compensation for the risk they have invested — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Founders seek surplus beyond break-even to reward risk.

In the case setting — startup founders who expect profit as compensation for the risk they have invested — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit compensates capital exposed to business risk.

Against the scenario (startup founders who expect profit as compensation for the risk they have invested), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Founders and investors expect profit as reward for risk.

Against the scenario (startup founders who expect profit as compensation for the risk they have invested), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 8, 'full' ),
( '3.3', 'CASE 3.3.09', 'Not-for-Profit Organisation Aims', 'Analyze the main aim of not-for-profit organisations when they pursue a mission rather than owner profit. Evaluate the following economic assertions:', ARRAY['Mission delivery still requires enough inflows to finance operations.', 'Not-for-profit organisations pursue a social or environmental mission rather than owner profit-maximisation.', 'A surplus in an NPO is typically used to further the organisation''s purpose.', 'Humanitarian, conservation, and environmental campaign NPOs all pursue mission delivery rather than private profit.', 'Not-for-profit status means the organisation may ignore funding needs entirely.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos still need revenues or donations to operate.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

The defining aim is mission delivery, not owner profit.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surpluses typically return to the mission.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Different mission types can still share npo characteristics.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos must still fund staff, materials, and logistics.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 9, 'full' ),
( '3.3', 'CASE 3.3.10', 'Charity Clinic Cost Coverage', 'Consider a charity clinic bills insurers enough to cover running costs while treating patients. Evaluate the following economic assertions:', ARRAY['Surplus from billing can improve patient services rather than owner payouts.', 'Treating patients while covering costs shows mission delivery with financial discipline.', 'Billing insurers to cover running costs aligns with not-for-profit cost coverage.', 'Billing insurers converts the clinic into a listed corporation.', 'Community clinics prove NPOs never need to cover staff or supply costs.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surpluses reinvest in mission delivery.

The scenario (a charity clinic bills insurers enough to cover running costs while treating patients) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos combine service delivery with cost coverage.

The scenario (a charity clinic bills insurers enough to cover running costs while treating patients) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos seek to cover costs while delivering mission services.

In the case setting — a charity clinic bills insurers enough to cover running costs while treating patients — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos can bill for cost coverage without profit-maximising aims.

Against the scenario (a charity clinic bills insurers enough to cover running costs while treating patients), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo healthcare must cover operating costs.

In the case setting — a charity clinic bills insurers enough to cover running costs while treating patients — the sentence mislabels the category or overreaches.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'], '2/5', 10, 'full' ),
( '3.3', 'CASE 3.3.11', 'Covering Costs in NPOs', 'Review cost coverage for not-for-profit organisations. Evaluate the following economic assertions:', ARRAY['NPOs ignore revenue because mission work is voluntary in nature.', 'Food banks track whether donations cover warehouse rent for ongoing operation.', 'Not-for-profit status does not prevent earning surplus reinvested for the mission.', 'Mission delivery requires no financial inflows once an NPO is registered.', 'Donor income frees an NPO from covering operating costs responsibly.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need inflows to operate.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos must ensure operating costs are covered.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may earn surplus reinvested into mission activities.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos need revenues or donations to operate.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need enough revenue to cover costs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 11, 'full' ),
( '3.3', 'CASE 3.3.12', 'NGO Theatre Ticket Surplus', 'Consider an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes. Evaluate the following economic assertions:', ARRAY['Ticket income covering nightly running costs lets performances continue.', 'Outreach funded from surplus shows mission reinvestment of NPO gains.', 'Performances require covered costs even when the mission is cultural outreach.', 'Reinvesting ticket surplus in outreach uses NPO gains for mission expansion.', 'The theatre combines earned ticket income with mission reinvestment aims.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Ticket receipts must at least cover nightly operating expenses to sustain shows.

In the case setting — an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Reinvested surplus can broaden mission reach.

The scenario (an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Cultural missions still rely on revenue covering performance running costs.

In the case setting — an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses fund expanded mission activities.

The scenario (an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Npos may combine fees and mission surplus use.

In the case setting — an NGO theatre sells tickets nightly and reinvests any surplus in outreach programmes — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '1/5', 12, 'full' ),
( '3.3', 'CASE 3.3.13', 'Donations as Revenue', 'Review donations as revenue for non-profit organisations. Evaluate the following economic assertions:', ARRAY['Donor income supports campaigns when earned revenue is limited.', 'Mixed donations and fees cannot sustain an NPO because only one revenue source is allowed.', 'Prior surplus cannot fund later aid shipments for humanitarian organisations.', 'Humanitarian NGOs dispatch kits before any funding because urgency overrides finance.', 'Donor gifts remove any need for NPOs to cover operating costs responsibly.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Donations finance mission operations.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may combine multiple inflow types.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surpluses and donations enable ongoing services.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Even urgent relief requires funded materials and logistics.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need enough revenue to cover costs.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 13, 'full' ),
( '3.3', 'CASE 3.3.14', 'Investors and Retained Profit', 'Consider how investors treat retained profit as reward for capital placed at risk. Evaluate the following economic assertions:', ARRAY['Retained profit can reward investors for capital exposed to business risk.', 'Investors expect profit as compensation for capital committed to the firm.', 'Retained earnings and investor reward both link to business risk-bearing.', 'Fixed wages to investors replace profit regardless of business performance.', 'Capital at risk deserves no return when revenues exceed expenses.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained earnings reward shareholders for capital placed at business risk.

The scenario (how investors treat retained profit as reward for capital placed at risk) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Investors receive profit as reward for risk taken.

The scenario (how investors treat retained profit as reward for capital placed at risk) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit on retained funds compensates owners who bear uncertainty of operations.

The scenario (how investors treat retained profit as reward for capital placed at risk) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit rewards vary with business performance and risk.

In the case setting — how investors treat retained profit as reward for capital placed at risk — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors expect profit as reward for risk.

In the case setting — how investors treat retained profit as reward for capital placed at risk — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 14, 'full' ),
( '3.3', 'CASE 3.3.15', 'NPO Revenue Mix', 'Review how not-for-profit organisations finance their activities. Evaluate the following economic assertions:', ARRAY['Donations and membership fees can fund not-for-profit operations.', 'Trading surplus can support mission spending within an NPO model.', 'Not-for-profit organisations never generate any surplus by definition.', 'Mission spending can only be financed by government grants.', 'Any surplus must be paid out as dividends to private owners.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Donations and fees are common npo inflows.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Trading can support mission costs without turning the npo into a profit-maximiser.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may generate surplus; they reinvest it rather than maximise owner profit.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Funding sources can include donations, fees, and trading.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus supports the mission, not private dividends.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 15, 'full' ),
( '3.3', 'CASE 3.3.16', 'Humanitarian NPO Characteristics', 'Review a humanitarian not-for-profit organisation as an economic actor. Evaluate the following economic assertions:', ARRAY['A humanitarian NPO kit dispatch requires prior inflows to fund materials and logistics.', 'Mission delivery, not private profit-maximisation, is the organisation''s primary aim.', 'A humanitarian NPO is legally the same as any listed for-profit corporation.', 'A humanitarian NPO operates without covering staff or warehouse costs.', 'Any surplus must be distributed as private shareholder dividends.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Aid delivery needs funded materials and logistics.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos pursue mission aims rather than owner profit.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo legal purpose differs from profit-maximising corporations.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Staff and facilities still require funding.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Surpluses support mission reinvestment.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 16, 'full' ),
( '3.3', 'CASE 3.3.17', 'Food Bank Rent Tracking', 'Consider a food bank tracks whether donations cover warehouse rent for its depot. Evaluate the following economic assertions:', ARRAY['Donations can cover rent while the food bank pursues its mission.', 'Food banks need not track costs because storage is goodwill.', 'Volunteer labour alone removes all premises cost requirements.', 'Rent coverage is irrelevant to not-for-profit organisations.', 'Warehouse rent must be funded by shareholder dividends.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Donor income helps npos finance operating expenses.

In the case setting — a food bank tracks whether donations cover warehouse rent for its depot — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos must ensure operating costs are covered.

Against the scenario (a food bank tracks whether donations cover warehouse rent for its depot), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Premises and logistics still require funding.

Against the scenario (a food bank tracks whether donations cover warehouse rent for its depot), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Covering costs is central to npo operation.

Against the scenario (a food bank tracks whether donations cover warehouse rent for its depot), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo costs are covered by donations and mission revenues.

In the case setting — a food bank tracks whether donations cover warehouse rent for its depot — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 17, 'full' ),
( '3.3', 'CASE 3.3.18', 'Conservation NPO Characteristics', 'Review a conservation not-for-profit organisation as an economic actor. Evaluate the following economic assertions:', ARRAY['Trading merchandise can fund habitat work without making the organisation profit-oriented.', 'Habitat protection financed from surplus fits not-for-profit behaviour.', 'Trading merchandise converts a conservation NPO into a firm maximising owner profit.', 'A conservation NPO behaves like a listed corporation maximising private owner wealth.', 'Merchandise surplus must be paid as private shareholder dividends.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Mission-funded trading is compatible with npo status.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission reinvestment is core npo behaviour.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission use of trading income does not redefine the organisation as profit-maximising.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

A conservation npo is mission-driven, not owner-wealth-maximising.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus supports the mission.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 18, 'full' ),
( '3.3', 'CASE 3.3.19', 'Environmental Campaign Spending', 'Consider how an environmental campaign NPO raises funds while limiting spending to mission delivery. Evaluate the following economic assertions:', ARRAY['Limiting spending to mission delivery fits not-for-profit behaviour.', 'Campaigns still depend on covering staff and logistics costs.', 'Fundraising for campaigns proves the organisation maximises private owner profit.', 'An environmental campaign NPO distributes surplus as owner dividends by definition.', 'Not-for-profit status removes any need for funding.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission-focused spending is characteristic of npos.

The scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Campaign delivery still has operating costs.

The scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Fundraising for a mission is not the same as owner profit-maximisation.

In the case setting — how an environmental campaign NPO raises funds while limiting spending to mission delivery — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surplus is reinvested in the mission.

Against the scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still need inflows to operate.

Against the scenario (how an environmental campaign NPO raises funds while limiting spending to mission delivery), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 19, 'full' ),
( '3.3', 'CASE 3.3.20', 'Risk and Profit Link', 'Analyze the link between business risk and profit. Evaluate the following economic assertions:', ARRAY['Profit rewards owners and investors for risk they have taken.', 'Investors view profit as compensation for capital exposed to market risk.', 'Covering costs alone satisfies owner expectations for risk taken.', 'Founders bear no risk in startups because lenders absorb all uncertainty.', 'Customer payments mean owners should expect no return when revenues exceed costs.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Returns compensate capital providers for bearing business risk.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Investors receive profit as reward for risk taken.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Commercial firms target profit above costs to reward risk.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors bear risk rewarded by profit.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners expect reward when revenues exceed costs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 20, 'full' ),
( '3.3', 'CASE 3.3.21', 'Durability Through Reinvest', 'Review profit reinvestment and business durability. Evaluate the following economic assertions:', ARRAY['Immediate distribution of all profit is required for commercial durability.', 'Reinvested profit supports durability and sustainability of a business.', 'Long-run survival for most firms depends on achieving profitable operations over time.', 'Commercial operators reinvesting surplus improve long-run survival prospects.', 'Profit enhances sustainability when reinvested in equipment improving future capacity.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvestment also supports durability.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens the firm''s long-run capacity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Most businesses aim to make profit to thrive over time.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit supports reinvestment and long-run survival.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens durability.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 21, 'full' ),
( '3.3', 'CASE 3.3.22', 'NPO Mission versus Profit', 'Analyze differences between not-for-profit and profit-oriented organisations. Evaluate the following economic assertions:', ARRAY['Profit-oriented firms primarily seek owner returns, while NPOs primarily pursue a mission.', 'An NPO may earn a surplus and still remain not-for-profit if surplus serves the mission.', 'Any organisation that sells goods must be classified as profit-maximising.', 'NPOs never employ paid staff because volunteers cover all work.', 'Mission and surplus are mutually exclusive for every organisation.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

The core distinction is primary aim: profit versus mission.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surplus reinvested in the mission is compatible with npo status.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Trading does not automatically imply profit-maximisation.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Many npos employ paid staff funded by inflows.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos can pursue a mission while managing a surplus.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 22, 'full' ),
( '3.3', 'CASE 3.3.23', 'Profit Motive Contrast', 'Review profit orientation with not-for-profit aims. Evaluate the following economic assertions:', ARRAY['NPOs may reinvest surplus into mission projects rather than owner payouts.', 'Commercial profit aims include rewarding owner risk and funding reinvestment.', 'Charging fees does not automatically make an organisation profit-oriented.', 'Profit-maximisation for owners is the primary NPO financial goal.', 'Both profit firms and NPOs ignore revenue because missions differ.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses support mission reinvestment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit orientation includes surplus, reinvestment, and risk reward.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Fee income can support npo cost coverage without profit-maximisation.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos prioritise mission over owner profit-maximisation.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Both need inflows to operate.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 23, 'full' ),
( '3.3', 'CASE 3.3.24', 'Surplus versus Profit Wording', 'Review surplus in NPOs compared with profit in firms. Evaluate the following economic assertions:', ARRAY['NPO surplus reinvested for mission resembles retained gain but not owner profit.', 'Owner dividends are typical for NPO surplus distribution.', 'Ticket surplus at an NGO theatre funds outreach instead of shareholder dividends.', 'Commercial profit and NPO surplus both involve inflows exceeding expenses when surplus arises.', 'Using surplus to improve services proves an NPO abandoned its mission.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses fund mission activities rather than owner returns.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses are reinvested, not owner dividends.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus supports mission reinvestment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Both involve revenues above costs when surplus arises.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Improving services aligns with npo aims.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 24, 'full' ),
( '3.3', 'CASE 3.3.25', 'Long-run Survival', 'Review long-run survival aims in businesses. Evaluate the following economic assertions:', ARRAY['Commercial firms typically aim for long-run operation by earning profit rather than merely breaking even.', 'Commercial durability excludes any retention of earnings.', 'Break-even alone is sufficient for most profit-oriented firms seeking to thrive.', 'Operating for longevity motivates seeking profit rather than only break-even.', 'Both firm types can ignore finance after the first successful year.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit supports long-run survival and growth.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained profit supports long-run capacity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit-oriented businesses target revenue above costs.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit supports long-run survival and reinvestment.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Ongoing inflows remain necessary.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 25, 'full' ),
( '3.3', 'CASE 3.3.26', 'Investor Return Logic', 'Analyze investor expectations about profit returns. Evaluate the following economic assertions:', ARRAY['Investors in expanding firms view profit as compensation for capital exposed to market risk.', 'Retained profit must be unrelated to investor risk because it stays in the firm.', 'Commercial investors view break-even as the ideal long-run outcome.', 'Investors treat profit as a salary unrelated to capital committed to the firm.', 'Owner return logic rejects any link between profit and capital at risk.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Investors receive profit as reward for risk taken.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained profit reflects returns on capital at risk.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Investors typically expect profit above costs.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit rewards capital providers for risk taken.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit compensates owners for capital placed at risk.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 26, 'full' ),
( '3.3', 'CASE 3.3.27', 'NPO Mission Types', 'Review how different not-for-profit missions share the same economic logic. Evaluate the following economic assertions:', ARRAY['A conservation NPO illustrates environmental mission focus within an NPO model.', 'A humanitarian NPO illustrates humanitarian mission delivery within an NPO model.', 'An environmental campaign NPO illustrates a mission-driven non-profit organisation.', 'Different mission labels remove the shared need to fund operations.', 'Mission type alone turns an NPO into a profit-maximising corporation.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Conservation work can be organised as an npo mission.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Humanitarian delivery can be organised as an npo mission.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Campaign advocacy can be organised as an npo mission.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

All npos still need resources to operate.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission type does not redefine the organisation as profit-maximising.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '1/5', 27, 'full' ),
( '3.3', 'CASE 3.3.28', 'Cost Coverage Threshold', 'Review covering costs as the NPO threshold. Evaluate the following economic assertions:', ARRAY['Covering costs allows NPOs to reinvest any surplus into mission activities.', 'Cost coverage allows NPOs to operate without donations or fees.', 'NPOs and commercial firms share identical primary goals for owner profit.', 'Clinics need no revenue because treatment is a mission service.', 'Maximising owner profit is the primary financial goal of not-for-profit organisations.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surplus can be reinvested to enhance mission delivery.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Inflows are still required to meet costs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Commercial firms target owner profit; npos focus on mission cost coverage.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo healthcare must cover operating costs.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos prioritise mission cost coverage over owner profit.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 28, 'full' ),
( '3.3', 'CASE 3.3.29', 'Social Enterprise Cafe Margin', 'Consider a social enterprise cafe seeks a margin to open a second training kitchen. Evaluate the following economic assertions:', ARRAY['Achieving revenue above costs can finance additional mission capacity.', 'Seeking margin to fund a training kitchen targets surplus for mission-related expansion.', 'Mission-related expansion can be financed from earned margin above costs.', 'Seeking margin proves the cafe abandoned its social mission entirely.', 'The cafe treats surplus as fuel for a second training kitchen rather than owner dividends.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Margin above costs enables reinvestment.

In the case setting — a social enterprise cafe seeks a margin to open a second training kitchen — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Surplus can fund expanded mission-related projects.

The scenario (a social enterprise cafe seeks a margin to open a second training kitchen) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Surplus above costs enables reinvestment.

In the case setting — a social enterprise cafe seeks a margin to open a second training kitchen — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Margin can fund mission expansion within a social enterprise.

In the case setting — a social enterprise cafe seeks a margin to open a second training kitchen — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Surplus can fund mission-related expansion.

The scenario (a social enterprise cafe seeks a margin to open a second training kitchen) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 29, 'full' ),
( '3.3', 'CASE 3.3.30', 'Aid Packing and Prior Surplus', 'Consider how a humanitarian NPO uses prior-year donation surplus to pack aid parcels. Evaluate the following economic assertions:', ARRAY['Prior surplus can fund later aid shipments for humanitarian organisations.', 'Aid parcels reflect humanitarian mission delivery rather than owner profit-maximisation.', 'Using prior surplus for later aid proves the organisation maximises private owner wealth.', 'Humanitarian NPOs cannot retain unused funds from one period to the next.', 'Mission delivery requires no logistics funding if volunteers pack parcels.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Surpluses can be carried forward for mission use.

The scenario (how a humanitarian NPO uses prior-year donation surplus to pack aid parcels) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Parcel packing serves the humanitarian mission.

In the case setting — how a humanitarian NPO uses prior-year donation surplus to pack aid parcels — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Mission use of surplus is not owner profit-maximisation.

In the case setting — how a humanitarian NPO uses prior-year donation surplus to pack aid parcels — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Unused inflows may be retained for later mission spending.

Against the scenario (how a humanitarian NPO uses prior-year donation surplus to pack aid parcels), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Materials and logistics still require funded inputs.

In the case setting — how a humanitarian NPO uses prior-year donation surplus to pack aid parcels — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 30, 'full' ),
( '3.3', 'CASE 3.3.31', 'Repair Shop Diagnostic Reinvest', 'Consider how founders of a repair shop reinvest last year''s profit into diagnostic tools. Evaluate the following economic assertions:', ARRAY['Founders treat retained profit as funding for long-run service capacity.', 'Diagnostic tool purchases from profit illustrate durability through reinvest.', 'Tool purchases must come from donations rather than business profit.', 'Reinvesting profit adopts not-for-profit dividend rules.', 'Repair shops must distribute all profit immediately to owners.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained profit strengthens durability.

The scenario (how founders of a repair shop reinvest last year''s profit into diagnostic tools) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens long-run capacity.

In the case setting — how founders of a repair shop reinvest last year''s profit into diagnostic tools — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Commercial firms reinvest profit into equipment.

Against the scenario (how founders of a repair shop reinvest last year''s profit into diagnostic tools), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Commercial reinvestment differs from npo mission surplus use.

Against the scenario (how founders of a repair shop reinvest last year''s profit into diagnostic tools), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profits can be reinvested in the business.

In the case setting — how founders of a repair shop reinvest last year''s profit into diagnostic tools — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 31, 'full' ),
( '3.3', 'CASE 3.3.32', 'Profit Trap: Revenue Alone', 'Review the trap that revenue alone equals profit. Evaluate the following economic assertions:', ARRAY['Profit compares total revenue with total costs and expenses.', 'Profit-oriented firms compare inflows with total expenses rather than counting revenue alone.', 'Margin appears only when revenue exceeds costs.', 'Strong sales do not guarantee profit when expenses rise faster than revenue.', 'Cost control remains essential to achieving profit.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Both sides of the account determine profit.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit emerges only when total revenues exceed total expenses.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

On this stem, the keyed answer treats the sentence as a correct application of that idea: «Margin appears only when revenue exceeds costs».

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Rising costs can erase profit despite revenue.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Both revenue and costs determine profit outcomes.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 32, 'full' ),
( '3.3', 'CASE 3.3.33', 'Mixed NPO Revenue', 'Analyze mixed funding sources for not-for-profit organisations. Evaluate the following economic assertions:', ARRAY['A conservation NPO combining merchandise sales and donations illustrates mixed NPO revenue.', 'Surplus at an environmental campaign NPO can support more campaigns rather than shareholder dividends.', 'Merchandise surplus at a conservation NPO can fund habitat work within the NPO model.', 'Mixed revenue automatically converts every NPO into a profit-maximising firm.', 'Donations alone are the only lawful NPO funding source.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may combine donations and trading income.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission reinvestment replaces owner dividends.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Trading surplus can finance conservation work.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Revenue mix does not redefine the primary npo aim.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Trading and fees can also fund npo activity.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 33, 'full' ),
( '3.3', 'CASE 3.3.34', 'Reinvestment in NPO Services', 'Review reinvesting surplus to improve NPO services. Evaluate the following economic assertions:', ARRAY['Improved services require distributing surplus to private owners.', 'Clinic upgrades must be paid to external shareholders.', 'Spending surplus on better services shows an NPO failed to distribute donor funds.', 'Beneficiary gains prove the NPO switched to profit-maximisation.', 'Theatre outreach funded from surplus converts the NGO into a commercial cinema.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus reinvests in mission, not owner payouts.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus reinvests in mission activities.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Improving services aligns with npo aims.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Service improvement aligns with mission reinvestment.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Surplus can fund expanded outreach programmes.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 34, 'full' ),
( '3.3', 'CASE 3.3.35', 'Owner Risk Compensation', 'Review profit as compensation for owner risk. Evaluate the following economic assertions:', ARRAY['Profit returns reflect capital placed at risk in the venture.', 'Commercial owners expect some return when revenues exceed expenses.', 'Fixed salaries to investors replace profit regardless of business performance.', 'Higher revenue than expenses allows owners to be rewarded for risk-bearing.', 'Profit and capital risk-bearing are unrelated in all firms.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit compensates capital providers for risk taken.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Owners and investors expect profit as reward for risk.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit provides variable return linked to performance and risk.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit orientation links surplus to owner and investor reward.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit rewards capital placed at risk.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 35, 'full' ),
( '3.3', 'CASE 3.3.36', 'Operating for Longevity', 'Analyze operating over longer periods in both firm types. Evaluate the following economic assertions:', ARRAY['Most businesses aim to operate longer by earning profit rather than merely breaking even.', 'Commercial durability often relies on reinvested profit.', 'Mission organisations need ongoing cost coverage to continue delivery.', 'Profit above costs is irrelevant to commercial longevity.', 'Once established, both firm types can ignore finance after a successful year.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit supports long-run survival and growth.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvestment supports long-run commercial survival.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos require ongoing revenues to remain viable.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit supports reinvestment and long-run survival.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Ongoing inflows remain necessary.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 36, 'full' ),
( '3.3', 'CASE 3.3.37', 'NPO Examples Across Missions', 'Review shared characteristics of mission-driven not-for-profit organisations. Evaluate the following economic assertions:', ARRAY['Humanitarian, conservation, and environmental campaign organisations can all operate as NPOs.', 'Mission-driven organisations still face scarcity of funds and staff capacity.', 'NPO status abolishes all operating costs.', 'An NPO may ignore inflow management because there are never wages to pay.', 'Any organisation with a mission must be classified as primary-sector production.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Different missions can share not-for-profit organisation status.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Scarcity still constrains npo resources.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still incur operating costs.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Many npos employ staff and manage payroll.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Sector classification depends on activity, not mission label alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 37, 'full' ),
( '3.3', 'CASE 3.3.38', 'Profit Enhances Sustainability', 'Review profit and commercial sustainability. Evaluate the following economic assertions:', ARRAY['Long-run commercial survival often depends on profitable operations over time.', 'Margin above break-even helps commercial firms expand and renew capital.', 'New ovens must be funded only by donations, not business profit.', 'Commercial sustainability requires distributing all earnings immediately.', 'Profit reduces sustainability because it always leaves firms underinvested.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Most businesses aim to make profit to thrive over time.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit above costs enables reinvestment and growth.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Commercial firms reinvest profit into equipment.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Reinvestment also supports sustainability.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Reinvestment supports long-run capacity.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 38, 'full' ),
( '3.3', 'CASE 3.3.39', 'Donor Income Role', 'Review donor income in NPO financing. Evaluate the following economic assertions:', ARRAY['Humanitarian relief depends on donations alongside any earned income.', 'Mixed donations and fees cannot sustain an NPO.', 'Donor income replaces all need for earned revenue at NPOs.', 'Donor income eliminates cost coverage discipline.', 'Food banks need not track costs when donations arrive.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Donations are essential revenue for many npos.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may combine multiple inflow types.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos may combine donations with fees and other inflows.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos must still manage costs responsibly.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos must ensure operating costs are covered.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 39, 'full' ),
( '3.3', 'CASE 3.3.40', 'Service Enhancement Surplus', 'Analyze using NPO surplus to enhance services. Evaluate the following economic assertions:', ARRAY['Beneficiaries gain when surplus funds improved outreach or care.', 'Ticket surplus at an NGO theatre can fund outreach programmes.', 'Using surplus to improve beneficiary services aligns with NPO aims.', 'Clinic service upgrades from surplus reflect mission reinvestment.', 'Service enhancement surplus must be paid to external shareholders.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Mission reinvestment can broaden or improve services.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Surplus can fund expanded outreach programmes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Reinvested surplus can enhance services for customers.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Surplus can improve mission delivery quality.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surplus reinvests in mission activities.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '1/5', 40, 'full' ),
( '3.3', 'CASE 3.3.41', 'Community Clinic NPO', 'Review community clinic behaviour as not-for-profit. Evaluate the following economic assertions:', ARRAY['Treating patients can continue only when operating costs are covered.', 'Community clinics pursuing cost coverage while treating patients reflect NPO priorities.', 'Community clinics distribute dividends like corporations.', 'Any clinic surplus should improve patient services rather than owner payouts.', 'Billing insurers proves maximising owner profit like a corporation.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo healthcare must cover operating costs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo healthcare aims to cover costs while serving patients.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surpluses are not owner dividends.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npo surpluses reinvest in mission delivery.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Covering costs differs from profit-maximisation for owners.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 41, 'full' ),
( '3.3', 'CASE 3.3.42', 'Disaster Relief Funding', 'Review funding humanitarian disaster relief. Evaluate the following economic assertions:', ARRAY['Relief organisations need secured funding before dispatching kits to disaster zones.', 'Prior surplus can complement donations for later relief operations.', 'Collecting donations before dispatch illustrates prior funding need for relief.', 'Disaster urgency bypasses all cost coverage requirements.', 'Volunteers remove all material costs from relief kits.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos need resources to deliver goods and services.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Prior surpluses and donations enable ongoing services.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Relief delivery requires secured inflows.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Funding remains necessary even in urgent relief.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Humanitarian delivery requires funded materials and logistics.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 42, 'full' ),
( '3.3', 'CASE 3.3.43', 'Margin Above Expenses', 'Analyze commercial margin above expenses. Evaluate the following economic assertions:', ARRAY['Margin above expenses funds new equipment in profit-oriented firms.', 'Profit requires comparing revenue with total costs.', 'Break-even matching is sufficient for commercial firms seeking to thrive.', 'Surplus above costs can support owner reward for risk-bearing.', 'Commercial firms target revenue above costs to reward risk and reinvest.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit funds reinvestment such as new equipment.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit emerges when revenue exceeds costs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit-oriented firms target surplus above costs.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit rewards owners for bearing business risk.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit-oriented firms seek surplus above costs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 43, 'full' ),
( '3.3', 'CASE 3.3.44', 'Break-even versus Thrive', 'Review break-even with thriving commercially. Evaluate the following economic assertions:', ARRAY['Break-even alone is insufficient for most profit-oriented firms seeking to thrive.', 'Longevity requires only break-even in profit-oriented firms.', 'Commercial thrive logic rejects any surplus above costs.', 'Thriving requires NPOs to maximise dividends to investors.', 'Retailers expand while keeping revenues below operating costs.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Commercial firms target profit above mere cost coverage.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Profit-oriented firms seek a surplus of revenue over total costs, not merely break-even. Covering costs alone is a floor, not the usual long-run commercial goal.

Profit supports long-run survival and growth.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit-oriented firms target revenue above costs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos aim to cover costs and reinvest surplus for the mission.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Commercial expansion relies on profit.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 44, 'full' ),
( '3.3', 'CASE 3.3.45', 'Surplus Not Distributed', 'Analyze why NPO surplus is not distributed to owners. Evaluate the following economic assertions:', ARRAY['Commercial profit and NPO surplus follow different uses above costs.', 'NPO surplus is reinvested for mission rather than paid as owner dividends.', 'Ticket income must be profit distributed to owners.', 'Undistributed surplus proves the NPO failed financially.', 'Mission reinvestment is forbidden when an NPO earns surplus.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses reinvest in mission; commercial profit may reward owners.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses support mission, not owner payouts.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Ticket revenue may fund mission reinvestment.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Reinvested surplus broadens mission capacity.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npo surpluses are typically reinvested into the mission.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 45, 'full' ),
( '3.3', 'CASE 3.3.46', 'Commercial Durability Logic', 'Review commercial durability through profit. Evaluate the following economic assertions:', ARRAY['Long-run survival for most firms depends on profitable operations.', 'Retained profit supports renewal of tools, premises, or systems over time.', 'Profit enables reinvestment that supports commercial durability.', 'Commercial firms thrive long term by merely matching costs with no margin.', 'Bakeries funding new ovens from surplus illustrate commercial durability logic.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Most businesses aim to make profit to thrive over time.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Retained profit funds capital renewal.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens long-run capacity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit-oriented firms target revenue above costs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profit funds capital renewal in commercial firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '1/5', 46, 'full' ),
( '3.3', 'CASE 3.3.47', 'NGO Project Funding', 'Review funding NGO projects over time. Evaluate the following economic assertions:', ARRAY['Prior fundraising surplus can fund later NGO projects.', 'Mixed inflows must be paid out as owner dividends.', 'Project funding ignores operating costs because missions are voluntary.', 'Grant awards are ceremonial and require no cost coverage.', 'Volunteer recruitment removes all revenue requirements.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Prior surpluses and donations can fund later projects.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Npos combine inflows to cover mission costs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Projects require financed staff and materials.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Grants must cover real project and staff costs.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Operations still require funded inflows.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 47, 'full' ),
( '3.3', 'CASE 3.3.48', 'Profit and Capital Renewal', 'Review profit funding capital renewal. Evaluate the following economic assertions:', ARRAY['Owners may reinvest rather than withdraw all profit in a growing repair shop.', 'Capital renewal in commercial firms commonly draws on retained profit.', 'Renewal spending and profit orientation are linked in commercial firms.', 'Reinvesting profit into tools improves future production or service capacity.', 'Commercial profit must be distributed immediately and cannot fund new equipment.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Profits can be reinvested in the business.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Commercial firms reinvest profit into equipment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profit commonly funds reinvestment in commercial firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Commercial profit can be retained and reinvested in equipment, capacity, and durability. Distributing every euro immediately is not required for profit orientation.

Reinvested profit strengthens capacity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Profits can be reinvested in the business.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 48, 'full' ),
( '3.3', 'CASE 3.3.49', 'Funding Disaster Relief', 'Review funding humanitarian disaster relief. Evaluate the following economic assertions:', ARRAY['Disaster relief requires funding for materials, transport, and staff or volunteers'' support costs.', 'Surplus from earlier fundraising can finance later shipments.', 'Not-for-profit status removes the need for any inflow planning.', 'Relief can be delivered indefinitely without donations or other inflows.', 'Any surplus in relief work must become private owner profit.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Logistics and materials must be funded.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Profit emerges when revenue exceeds total costs and expenses in a period. Cost control matters alongside sales; revenue without expense control does not satisfy the profit objective.

Prior surplus can support later mission delivery.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Npos still plan and manage funding.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Continuous delivery needs ongoing inflows.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission surplus is not private owner profit.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 49, 'full' ),
( '3.3', 'CASE 3.3.50', 'NPO Synthesis', 'Review core claims about not-for-profit organisations. Evaluate the following economic assertions:', ARRAY['NPOs pursue a mission rather than maximising private owner profit.', 'Surpluses in NPOs typically return to mission delivery.', 'Humanitarian, conservation, and environmental campaign groups can illustrate NPO forms.', 'Selling goods always converts an NPO into a profit-maximising corporation.', 'NPOs can operate indefinitely with no inflows of any kind.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission aim distinguishes npos from profit-oriented firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Mission reinvestment of surplus is standard npo behaviour.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Different mission types can share npo characteristics.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Trading for mission funding does not redefine the organisation as profit-maximising.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Not-for-profit organisations pursue a mission rather than owner profit, but they still need funding inflows. Surpluses are typically ploughed back into the mission; a cost-recovery fee alone does not convert an NPO into a profit-maximising firm.

Operations require donations, fees, grants, or trading income.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 50, 'full' ),
( '3.4', 'CASE 3.4.01', 'EU micro staff ceiling', 'Consider a workshop that employs nine people with €1.8m turnover. Evaluate the following economic assertions:', ARRAY['Because staff are below ten, a firm remains a micro enterprise despite turnover above €2m.', 'Forty-five staff alone guarantees small classification even if turnover exceeds €10m.', 'Meeting the staff ceiling alone is sufficient for micro status regardless of turnover or balance sheet totals.', 'Under the EU definition, a micro enterprise may employ fewer than ten people.', 'A firm qualifies as micro because its balance sheet is below €2m, regardless of turnover above €2m.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Both staff and financial thresholds must be met; high turnover can exclude micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Both staff and turnover thresholds must be satisfied for small status.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Micro status requires both the staff ceiling and a turnover or balance sheet cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — Eu micro classification requires fewer than ten employees.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Turnover above €2m can disqualify micro status despite a qualifying balance sheet.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'], '2/5', 1, 'full' ),
( '3.4', 'CASE 3.4.02', 'Micro turnover edge case', 'Consider a neighbourhood bakery, which has six staff and €2.1m turnover. Evaluate the following economic assertions:', ARRAY['Turnover above €10m can push a firm out of the small category even when staff remain below fifty.', 'Micro status allows either turnover up to €2m or a balance sheet total up to €2m alongside the staff limit.', 'Exceeding the €2m turnover cap can disqualify a firm from micro status even when staff are below ten.', 'Small status also requires turnover not exceeding €10m.', 'A small enterprise may employ fewer than fifty people under EU definitions.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — The €10m turnover cap is binding alongside the staff threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Micro firms must meet the staff cap and either the turnover or balance sheet financial ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Turnover above €2m breaks the micro financial cap even with a small workforce.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Small classification additionally requires turnover at or below €10m.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — The eu small category sets an upper staff limit below fifty employees.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
'], '2/5', 2, 'full' ),
( '3.4', 'CASE 3.4.03', 'Micro balance sheet OR test', 'Consider a design studio that reports eight staff, €2.4m turnover, and a €1.7m balance sheet. Evaluate the following economic assertions:', ARRAY['A firm fails the medium test because both financial figures must be below their respective caps.', 'Medium enterprises employ fewer than two hundred and fifty people under EU definitions.', 'Because turnover is within €50m, balance sheet size is irrelevant for medium classification.', 'Two hundred and forty employees exceed the medium staff ceiling.', 'Thirty-eight staff alone keeps a firm in the small category despite turnover above €10m.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Only one financial threshold needs to be met alongside staff; both need not pass.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — Eu medium enterprises must employ fewer than 250 people.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Exceeding the balance sheet cap disqualifies medium status even if turnover qualifies.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — 240 is below 250 and therefore within the medium staff limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Small status requires both staff and turnover limits; breaching turnover removes small classification.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'], '4/5', 3, 'full' ),
( '3.4', 'CASE 3.4.04', 'Small dual thresholds', 'Analyze EU small-enterprise criteria for a firm with forty-five staff and €9.5m turnover. Evaluate the following economic assertions:', ARRAY['MSME excludes micro firms and covers only small and medium categories.', 'SMEs represent a narrow minority of EU firms because large corporations dominate registration statistics.', 'SME labels are purely descriptive and have no effect on access to finance or reporting rules.', 'A components manufacturer counts as a medium enterprise because it operates internationally.', 'Medium status permits turnover up to €50m or a balance sheet total up to €43m together with the staff cap.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Micro firms are explicitly included in msme/sme groupings.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Smes form the vast majority, not a minority, of eu businesses.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Definitions actively shape finance access and regulatory treatment.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Medium status depends on thresholds, not on geographic scope alone.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — Medium classification uses staff plus either turnover or balance sheet financial ceilings.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 4, 'full' ),
( '3.4', 'CASE 3.4.05', 'Small turnover breach', 'Consider a wholesaler that has thirty-eight staff but €10.4m turnover. Evaluate the following economic assertions:', ARRAY['A workforce of about ten thousand places a components manufacturer outside EU medium enterprise limits.', 'Approximately ninety-nine percent of businesses in the EU are SMEs.', 'Accounting requirements are identical for micro firms and large multinationals under EU practice.', 'Two hundred employees fall within the medium staff threshold.', 'Seven staff and a €1.9m balance sheet guarantee micro status despite turnover above €2m.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Ten thousand staff far exceeds the 250-employee medium ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Official eu data cite that about 99% of eu businesses are smes.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is true.
', 'FALSE — Size affects accounting rules, implying differences by category.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — 200 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Exceeding the turnover cap disqualifies micro status even with qualifying staff and balance sheet.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
'], '2/5', 5, 'full' ),
( '3.4', 'CASE 3.4.06', 'Medium staff limit', 'Analyze medium-enterprise criteria for a manufacturer with two hundred and forty employees. Evaluate the following economic assertions:', ARRAY['Official SME classification can determine eligibility for EU support programmes and finance schemes.', 'Size definitions matter because accounting rules may differ for smaller and larger firms.', 'Ten employees still count as micro because the threshold says fewer than ten.', 'Two hundred and fifty employees satisfies the medium requirement of fewer than two hundred and fifty.', 'Fifty employees meets the small enterprise staff requirement of fewer than fifty.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Eu support and finance often hinge on meeting sme criteria.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Size classification affects which accounting rules apply to a firm.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Ten employees is not fewer than ten, so the staff test fails.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — 250 is not fewer than 250; the staff test fails.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Small requires fewer than fifty staff; fifty is not eligible.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'], '2/5', 6, 'full' ),
( '3.4', 'CASE 3.4.07', 'Medium financial OR logic', 'Consider a firm that has one hundred eighty staff, €48m turnover, and a €44m balance sheet. Evaluate the following economic assertions:', ARRAY['Any firm with more than ten employees is classified as large under EU rules.', 'MSME commonly groups micro, small, and medium enterprises under one umbrella term.', 'Crossing size thresholds can change which accounting rules apply to a business.', 'Any local shop qualifies as micro without reference to staff or turnover data.', 'Exactly ten staff exceeds the micro employee ceiling of fewer than ten.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Small and medium tiers cover firms well above ten employees.

Against the scenario (a firm that has one hundred eighty staff, €48m turnover, and a €44m balance sheet), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Msme refers to micro, small, and medium enterprises collectively.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Growing beyond thresholds can shift reporting requirements.

In the case setting — a firm that has one hundred eighty staff, €48m turnover, and a €44m balance sheet — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Official staff and financial tests determine micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — The micro limit is strictly below ten employees; ten does not qualify.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'], '4/5', 7, 'full' ),
( '3.4', 'CASE 3.4.08', 'Medium turnover within cap', 'Analyze an engineering firm has two hundred staff, €49m turnover, and a €42m balance sheet. Evaluate the following economic assertions:', ARRAY['Exceeding medium staff or financial thresholds generally moves a firm out of SME status.', 'Grant schemes often require proof that the applicant meets official micro enterprise criteria.', 'Exactly fifty staff exceeds the small category employee limit.', 'Micro firms must meet the staff cap and either the turnover or balance sheet financial limit.', 'Exactly 250 staff exceeds the medium employee ceiling.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Surpassing medium criteria places a firm in the large category.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Support programmes use the standard eu micro thresholds for eligibility.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — The small staff cap is strictly below fifty employees.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Eu micro rules pair staff with one of two financial caps.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — The medium cap excludes firms with 250 or more employees.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '3/5', 8, 'full' ),
( '3.4', 'CASE 3.4.09', 'A components manufacturer large scale', 'Consider a components manufacturer employs roughly ten thousand staff worldwide. Evaluate the following economic assertions:', ARRAY['A balance sheet above €43m can disqualify medium status even with low turnover.', 'Crossing micro limits while staying within small thresholds reclassifies the firm as small.', 'Policies supporting SMEs affect the vast majority of EU businesses by number.', 'Size differences can mean different accounting rule sets for a micro supplier and a components manufacturer.', 'Small enterprises must record turnover not exceeding €10m.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — The €43m balance sheet limit is binding for medium classification.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Qualifying within small limits replaces micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

With ~99% sme share, sme-focused policy reaches most businesses.

The scenario (a components manufacturer employs roughly ten thousand staff worldwide) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Size classification links to differing accounting rules between micro and large firms.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €10m is the small turnover ceiling in the EU table.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
'], '2/5', 9, 'full' ),
( '3.4', 'CASE 3.4.10', 'SME share in the EU', 'Analyze statements about the prevalence of SMEs in the European Union. Evaluate the following economic assertions:', ARRAY['Medium enterprises may report turnover up to €50m under EU definitions.', 'Micro classification requires both turnover and balance sheet to stay below €2m simultaneously.', 'Micro requires fewer than ten staff plus financial caps, stricter than small staff limits.', 'Small firms may report turnover up to €50m provided staff are below fifty.', 'Medium status is confirmed because staff and turnover both qualify despite balance sheet breach.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — €50m is the medium turnover ceiling in the EU table.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Only one financial measure must qualify, not both at once.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Micro staff cap is below ten, much tighter than small''s below fifty.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — €50m is the medium turnover cap, not the small cap.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — Exceeding the balance sheet cap blocks medium status despite qualifying staff and turnover.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
'], '2/5', 10, 'full' ),
( '3.4', 'CASE 3.4.11', 'Why definitions matter', 'Analyze a startup seeks EU-backed finance tied to official size categories. Evaluate the following economic assertions:', ARRAY['Two people employed falls well within the micro staff ceiling.', 'Because SMEs are numerous, individual SME failures have no community impact.', 'Lenders may verify SME status using official headcount and turnover thresholds.', 'SME tiers require joint satisfaction of staff and relevant financial thresholds.', 'Most EU businesses by count are classified within SME size bands.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Two employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme failures can still affect employees, suppliers, and local communities.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Finance programmes rely on standard sme criteria.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Eu definitions combine staff with financial caps for each tier.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

~99% of EU businesses are SMEs by count.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '1/5', 11, 'full' ),
( '3.4', 'CASE 3.4.12', 'MSME terminology', 'Analyze terminology linking micro, small, and medium enterprises in EU policy. Evaluate the following economic assertions:', ARRAY['Turnover above €50m disqualifies medium status even if balance sheet qualifies.', 'Medium turnover cap is €10m, identical to the small limit.', 'Any firm with forty staff is micro because it employs fewer than fifty people.', 'Adding staff and sales can leave a firm classified as micro even after crossing small thresholds.', 'All EU firms file identical full public accounts regardless of size category.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — €52m turnover exceeds the €50m medium ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — €10m is the small cap; medium allows up to €50m.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Forty staff exceeds micro limits and aligns with small staff range instead.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Exceeding micro thresholds moves classification upward if small criteria are met.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Sme and large firms face different reporting expectations.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 12, 'full' ),
( '3.4', 'CASE 3.4.13', 'Accounting rules by size', 'Analyze a growing firm approaches medium thresholds. Evaluate the following economic assertions:', ARRAY['A small IT-support venture illustrate micro-scale operations compared with a components manufacturer''s large workforce.', 'Complete staff and financial data are needed to verify micro or other SME tiers.', 'SME definitions are irrelevant once a firm exports outside the home country.', 'One hundred and eighty employees fits the medium staff band if financial tests also pass.', 'Micro pairs sub-ten staff with €2m turnover or balance sheet limits.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Local micro ventures contrast with a components manufacturer''s large-scale workforce.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Both staff and financial caps must be checked.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Export activity does not override sme threshold tests.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — 180 is within medium''s below-250 staff range.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — This matches the eu micro row in the official sme table.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'], '2/5', 13, 'full' ),
( '3.4', 'CASE 3.4.14', 'Micro balance within cap', 'Consider a consultancy that has seven staff, €2.3m turnover, and a €1.9m balance sheet. Evaluate the following economic assertions:', ARRAY['Operating alone prevents micro classification because micro requires at least five staff.', 'Large firms like a components manufacturer can employ thousands despite being few in number.', 'Three thousand staff can still fall within medium limits if turnover is managed.', 'Turnover within €10m alone makes a firm small even with three hundred employees.', 'Turnover above €50m prevents medium classification when that cap is breached.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — There is no minimum staff count for micro beyond the upper cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

A components manufacturer illustrates large-scale employment in a rare large firm.

The scenario (a consultancy that has seven staff, €2.3m turnover, and a €1.9m balance sheet) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — 3,000 far exceeds the 250-employee medium cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Three hundred staff exceeds medium limits regardless of turnover.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — €55m exceeds the €50m medium turnover limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '4/5', 14, 'full' ),
( '3.4', 'CASE 3.4.15', 'Ten employees boundary', 'Consider a family firm that employs exactly ten people with €1.5m turnover. Evaluate the following economic assertions:', ARRAY['Micro enterprises form a large part of the SME group that dominates EU business counts.', '€43m is the medium balance sheet ceiling paired with sub-250 staff.', 'Nine staff and a €1.6m balance sheet confirm micro status despite €2.05m turnover.', 'Eight staff is compatible with micro but financial figures must still be verified.', 'The ninety-nine percent statistic proves SMEs generate ninety-nine percent of EU GDP.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Micro firms are part of the ~99% sme majority.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €43m balance sheet is the medium cap in the EU table.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

Here the figures are about 250 staff and €43m turnover — compare each with the relevant ceiling before classifying.

The statement is true.
', 'FALSE — Turnover above €2m disqualifies micro status even with qualifying balance sheet.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Eight staff fits micro range pending financial tests.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — The figure refers to business numbers, not gdp share.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
'], '3/5', 15, 'full' ),
( '3.4', 'CASE 3.4.16', 'Fifty staff boundary', 'Analyze a logistics company employs exactly fifty people with €8m turnover. Evaluate the following economic assertions:', ARRAY['Leaving SME status can end eligibility for certain EU SME finance programmes.', 'Medium status holds because balance sheet is within €43m despite turnover above €50m.', 'Medium pairs sub-250 staff with a €10m turnover cap.', 'Thirty staff is within the small enterprise employee limit.', 'One hundred and eighty staff keeps a firm in the small category because turnover is below €50m.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme-tied support typically excludes large firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Exceeding turnover cap blocks medium status despite balance sheet within limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €10m is the small turnover cap, not medium.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

Here the figures are about 250 staff and €10m turnover — compare each with the relevant ceiling before classifying.

The statement is false.
', 'TRUE — 30 is below the fifty-employee small cap.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — 180 staff exceeds small''s below-fifty limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'], '2/5', 16, 'full' ),
( '3.4', 'CASE 3.4.17', 'Two hundred fifty staff cap', 'Analyze a textile plant employs exactly two hundred fifty workers with €40m turnover. Evaluate the following economic assertions:', ARRAY['EU SME tiers combine employee ceilings with turnover and/or balance sheet caps.', 'Nine staff alone proves micro status without financial documentation.', 'A components manufacturer counts as a micro enterprise because it supplies components to phone makers.', 'One hundred and twenty-five staff satisfies the medium employee threshold.', 'Staff headcount must be verified alongside turnover for medium classification.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Combined criteria define each tier in the eu table.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Supplier role does not determine size; headcount and financials do.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — 125 is below 250 staff limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Staff verification is mandatory alongside turnover.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 17, 'full' ),
( '3.4', 'CASE 3.4.18', 'Large versus SME cut-off', 'Analyze when a firm is treated as large rather than SME under EU thresholds. Evaluate the following economic assertions:', ARRAY['Four employees fall within the micro staff ceiling.', '€2m turnover cap applies to small enterprises rather than micro.', '€55m turnover confirms medium status because balance sheet is below €43m.', 'Because SMEs are ninety-nine percent of firms, large firms employ fewer than one percent of workers.', 'A firm can progress from micro to small to medium as metrics cross successive thresholds.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Four staff is below ten-employee micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — €2m turnover cap applies to micro, not small.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Turnover breach blocks medium status despite balance sheet within cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Few large firms can still account for substantial employment shares.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
', 'TRUE — Growth can move a firm through sme tiers sequentially.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 18, 'full' ),
( '3.4', 'CASE 3.4.19', 'EU micro grant logic', 'Analyze a small IT-support venture consider an EU micro-enterprise grant. Evaluate the following economic assertions:', ARRAY['Forty-five staff and €9.5m turnover together meet EU small enterprise thresholds.', 'Thirty-eight staff fits the small employee ceiling below fifty.', '€1.8m turnover stays within the micro turnover cap of €2m.', 'Six employees fit the micro staff ceiling even when turnover exceeds €2m.', 'Nine employees satisfy the micro staff ceiling of fewer than ten people.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Both staff below fifty and turnover below €10m satisfy small criteria.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Thirty-eight is within the small staff limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €1.8m meets the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Six staff meets the micro headcount test though turnover may fail.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Nine is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'], '2/5', 19, 'full' ),
( '3.4', 'CASE 3.4.20', 'Micro OR financial logic', 'Analyze how EU micro financial tests combine turnover and balance sheet figures. Evaluate the following economic assertions:', ARRAY['Micro firms are excluded from SME statistics because they are too small to register.', 'Eight staff proves a firm is micro without checking turnover or balance sheet.', 'Two hundred and forty employees fits the medium staff ceiling below two hundred and fifty.', '€48m turnover is within the €50m medium turnover cap.', 'Large classification removes all legal duties to publish any financial information.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Micro firms are included in sme counts and definitions.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Financial caps must also be satisfied for micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — 240 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €48m meets the medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Large firms face reporting duties rather than exemption.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '4/5', 20, 'full' ),
( '3.4', 'CASE 3.4.21', 'Small €10m cap recall', 'Analyze EU small-enterprise financial limits alongside staff criteria. Evaluate the following economic assertions:', ARRAY['€180k turnover is well below the €2m micro turnover cap.', 'A retailer is micro because turnover is under €10m despite thirty staff.', 'Four staff with €600k turnover can qualify as micro when financial caps are met.', 'Two hundred staff with €49m turnover and a €42m balance sheet can satisfy medium thresholds.', 'One hundred and twenty-five staff with €25m turnover and €30m balance sheet can satisfy medium thresholds.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — €180k meets the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Staff above ten and turnover above €2m exclude micro; small may apply.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Low headcount and turnover can satisfy micro criteria.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — All three metrics can meet medium caps together.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Staff and both financial figures can meet medium caps.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 21, 'full' ),
( '3.4', 'CASE 3.4.22', 'Medium balance sheet breach', 'Analyze a company has one hundred staff, €30m turnover, and a €43.5m balance sheet. Evaluate the following economic assertions:', ARRAY['Thirty staff with €9.9m turnover satisfies EU small enterprise thresholds.', 'A firm is small because turnover is only €25m despite one hundred twenty-five staff.', 'One hundred staff with €30m turnover fits the medium staff and turnover bands.', '€2m is the micro turnover ceiling in the EU SME table.', 'Nine staff fits the micro employee ceiling pending turnover verification.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Both metrics meet small staff and turnover caps.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — 125 staff exceeds small staff limit despite moderate turnover.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — 100 staff and €30m turnover can meet medium thresholds pending balance sheet.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €2m turnover cap applies to micro enterprises.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Nine is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'], '4/5', 22, 'full' ),
( '3.4', 'CASE 3.4.23', 'SME policy prevalence', 'Analyze policy makers note SMEs make up about ninety-nine percent of EU businesses. Evaluate the following economic assertions:', ARRAY['Micro, small, and medium are identical categories with the same staff ceilings.', '€43m is the medium balance sheet ceiling in the EU SME table.', '€10m is the small turnover ceiling in the EU SME table.', '€2m is the micro balance sheet ceiling in the EU SME table.', '€50m is the medium turnover ceiling in the EU SME table.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Each tier has distinct staff and financial thresholds.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — €43m balance sheet cap applies to medium enterprises.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €10m turnover cap applies to small enterprises.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €2m balance sheet cap applies to micro enterprises.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €50m turnover cap applies to medium enterprises.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 23, 'full' ),
( '3.4', 'CASE 3.4.24', 'Growth micro to small', 'Consider a small IT-support venture plan to hire staff and expand turnover. Evaluate the following economic assertions:', ARRAY['Village location prevents micro classification regardless of size metrics.', '€40m turnover alone is sufficient proof of medium enterprise status.', 'SME status depends on official headcount and financial thresholds, not on industry sector.', 'Meeting either the medium turnover cap or the medium balance sheet cap can satisfy the financial test.', 'Micro status can be granted when balance sheet totals alone stay within the micro financial ceiling.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Location does not override eu size thresholds.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Medium requires sub-250 staff plus financial tests.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sector does not override eu size threshold tests.

The scenario (a small IT-support venture plan to hire staff and expand turnover) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Only one financial measure must qualify for medium status.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Only one financial measure must qualify for micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'], '2/5', 24, 'full' ),
( '3.4', 'CASE 3.4.25', 'A components manufacturer accounting contrast', 'Analyze reporting expectations for a components manufacturer and a micro village supplier. Evaluate the following economic assertions:', ARRAY['Expanding headcount and turnover past small-tier limits can push a firm into the medium category.', 'Three thousand staff far exceeds the two hundred and fifty employee medium ceiling.', 'Outgrowing micro employee or financial caps can move a workshop into the small enterprise band.', 'Export activity does not override EU SME threshold tests for classification.', '€200m turnover far exceeds the €50m medium turnover ceiling.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Progression to medium replaces small when medium limits are satisfied.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — 3,000 staff places a firm outside medium limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Progression to small replaces micro when small limits are satisfied.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Cross-border sales do not replace official size criteria.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — €200m turnover places a firm outside medium limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 25, 'full' ),
( '3.4', 'CASE 3.4.26', 'Medium €50m turnover cap', 'Analyze the EU medium enterprise turnover limit alongside other criteria. Evaluate the following economic assertions:', ARRAY['€2.1m turnover exceeds the €2m micro turnover cap.', '€10.4m turnover exceeds the €10m small turnover cap.', '€52m turnover exceeds the €50m medium turnover cap.', 'Firms skip the small tier whenever they hire a tenth employee.', 'A €44m balance sheet exceeds the €43m medium balance sheet cap.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — €2.1m breaks the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €10.4m breaks the small turnover threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €52m breaks the medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Ten employees fail micro but small requires further staff and turnover tests.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — €44m breaks the medium balance sheet threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 26, 'full' ),
( '3.4', 'CASE 3.4.27', 'Micro versus small confusion', 'Analyze an examiner checks claims mixing micro and small staff ceilings. Evaluate the following economic assertions:', ARRAY['Eight employees fall short of the micro tier''s fewer-than-ten staff threshold.', 'A seven-person workforce remains within micro staffing limits under EU rules.', 'Exactly ten staff satisfies the micro requirement of fewer than ten employees.', 'Exactly two hundred fifty staff satisfies the medium requirement of fewer than two hundred and fifty.', 'Exactly fifty staff satisfies the small enterprise requirement of fewer than fifty.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Eight is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Seven is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Ten is not fewer than ten; the micro staff test fails.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — 250 is not fewer than 250; the medium staff test fails.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Fifty is not fewer than fifty; the small staff test fails.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'], '2/5', 27, 'full' ),
( '3.4', 'CASE 3.4.28', 'SME finance verification', 'Analyze a medium-sized exporter seeks a bank loan with EU guarantee backing. Evaluate the following economic assertions:', ARRAY['One hundred and eighty employees remain within the medium staffing band below two hundred and fifty.', 'A medium exporter employing one hundred workers stays under the two-hundred-fifty employee ceiling.', '€2.1m turnover still meets the micro turnover cap of €2m.', '€10.4m turnover still meets the small turnover cap of €10m.', 'One hundred and twenty workers on payroll still qualifies as medium under the staff cap.'], ARRAY[true, true, false, false, true], ARRAY['TRUE — 180 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — 100 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — €2.1m exceeds the €2m micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — €10.4m exceeds the €10m small turnover threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — 120 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 28, 'full' ),
( '3.4', 'CASE 3.4.29', 'Local repair shop profile', 'Consider a technician who runs a repair shop with one apprentice, two staff total, and €180k turnover. Evaluate the following economic assertions:', ARRAY['€52m turnover still meets the medium turnover cap of €50m.', 'A €44m balance sheet still meets the medium balance sheet cap of €43m.', 'Two workers on payroll automatically places the shop above the micro employee band.', 'Employing six people forces the business out of micro classification on headcount alone.', 'Two hundred staff fits the medium employee ceiling below two hundred and fifty.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — €52m exceeds the €50m medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €44m exceeds the €43m medium balance sheet threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Two is below ten and fits the micro staff ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Six is below ten and fits the micro staff ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — 200 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 29, 'full' ),
( '3.4', 'CASE 3.4.30', 'Combined criteria requirement', 'Analyze whether meeting one SME criterion alone guarantees overall SME status. Evaluate the following economic assertions:', ARRAY['Forty-five staff fits the small employee ceiling below fifty.', 'Thirty staff exceeds the small employee ceiling of fewer than fifty.', 'One hundred and eighty staff fits the small employee ceiling below fifty.', 'Two hundred staff fits the small employee ceiling below fifty.', 'Three thousand staff fits the medium employee ceiling below two hundred and fifty.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — 45 is below the fifty-employee small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — Thirty is below fifty and fits the small staff ceiling.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — 180 exceeds the fifty-employee small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — 200 exceeds the fifty-employee small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — 3,000 far exceeds the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
'], '2/5', 30, 'full' ),
( '3.4', 'CASE 3.4.31', 'Three thousand staff group', 'Consider a tech group that employs three thousand staff with €200m turnover. Evaluate the following economic assertions:', ARRAY['Turnover of €1.8m exceeds the micro turnover cap of €2m.', 'Micro firms are included in SME counts and MSME groupings.', 'Ten thousand a components manufacturer staff fits the medium employee ceiling below two hundred and fifty.', 'Turnover of €9.5m exceeds the small turnover cap of €10m.', 'Turnover of €49m exceeds the medium turnover cap of €50m.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — €1.8m is within the €2m micro turnover ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Micro enterprises form part of the sme category.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — 10,000 far exceeds the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €9.5m is within the €10m small turnover ceiling.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'FALSE — €49m is within the €50m medium turnover ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
'], '2/5', 31, 'full' ),
( '3.4', 'CASE 3.4.32', 'Architect turnover edge', 'Analyze an architect practice has nine staff, €2.05m turnover, and a €1.6m balance sheet. Evaluate the following economic assertions:', ARRAY['A firm with forty-five staff is micro because it employs fewer than fifty people.', 'Large firms face reporting duties rather than exemption from financial disclosure.', 'Because SMEs are numerous by count, SME-focused policy reaches most EU businesses.', 'Few large firms can still account for substantial employment despite being rare by count.', 'SME failures can still affect employees, suppliers, and local communities.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Forty-five staff exceeds the micro ceiling of fewer than ten.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Large classification brings reporting obligations.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

High sme share by number shapes eu business policy.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Large employers can be few in number yet significant in jobs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme insolvency has stakeholder effects beyond firm count statistics.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '4/5', 32, 'full' ),
( '3.4', 'CASE 3.4.33', 'SME count statistic meaning', 'Analyze what the ninety-nine percent SME figure implies about EU business structure. Evaluate the following economic assertions:', ARRAY['A firm with thirty-eight staff is micro because it employs fewer than fifty people.', 'Small status requires fewer than fifty staff plus turnover at or below €10m.', 'Medium status requires fewer than two hundred and fifty staff plus a qualifying financial test.', 'EU support programmes use standard SME thresholds to verify applicant eligibility.', 'A firm with nine staff still needs turnover or balance sheet data to confirm micro status.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Thirty-eight staff exceeds the micro ceiling of fewer than ten.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — Small combines staff ceiling with the €10m turnover cap.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Medium combines staff ceiling with turnover or balance sheet caps.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Finance schemes rely on official size criteria.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Financial caps must be verified alongside headcount.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'], '3/5', 33, 'full' ),
( '3.4', 'CASE 3.4.34', 'Medium turnover breach path', 'Analyze a firm has one hundred twenty staff, €52m turnover, and a €40m balance sheet. Evaluate the following economic assertions:', ARRAY['Medium status follows from international operations regardless of headcount.', 'A components manufacturer is classified as large under EU thresholds because headcount far exceeds medium limits.', 'Micro status requires fewer than ten staff plus turnover at or below €2m or balance sheet at or below €2m.', 'a neighbourhood bakery with six staff meets the micro headcount test.', 'A firm with eight staff still needs turnover or balance sheet data to confirm micro status.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Medium status depends on eu thresholds, not geographic scope.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — A components manufacturer''s ~10,000 staff exceeds the 250-person medium ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Micro combines staff ceiling with one financial cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Six employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Financial caps must be verified alongside headcount.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
'], '4/5', 34, 'full' ),
( '3.4', 'CASE 3.4.35', 'Small to medium transition', 'Analyze a family manufacturer grows to one hundred eighty staff and €45m turnover. Evaluate the following economic assertions:', ARRAY['A village craft business with four staff meets the micro headcount test.', 'Micro status follows from supplying larger manufacturers regardless of headcount.', 'A local repair shop with two staff meets the micro headcount test.', 'A retailer with thirty staff meets the small headcount test.', 'SME classification is optional for firms seeking EU support programmes.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Four employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Supplier relationships do not determine eu size classification.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'TRUE — Two employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Thirty employees is below the fifty-person small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Official sme criteria gate access to many support schemes.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 35, 'full' ),
( '3.4', 'CASE 3.4.36', 'EU table tier pairing', 'Analyze each enterprise tier with its paired EU threshold logic. Evaluate the following economic assertions:', ARRAY['An architect practice with nine staff meets the micro headcount test.', 'A family firm with exactly ten staff fails the micro headcount test.', 'A textile plant with exactly two hundred fifty staff fails the medium headcount test.', 'A wholesaler with thirty-eight staff meets the small headcount test.', 'A logistics company with exactly fifty staff fails the small headcount test.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Nine employees is below the ten-person micro limit.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Thirty-eight employees is below the fifty-person small limit.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
'], '2/5', 36, 'full' ),
( '3.4', 'CASE 3.4.37', 'Small bakery versus large manufacturer', 'Compare a neighbourhood bakery with a large components manufacturer when discussing business size. Evaluate the following economic assertions:', ARRAY['The medium financial test treats €43m as the upper balance sheet bound.', 'Micro eligibility includes balance sheet totals that do not exceed €2m.', 'Small-enterprise turnover qualification allows figures up to the €10m ceiling.', 'Micro turnover qualification permits annual sales up to €2m under EU tables.', 'Medium turnover qualification permits figures up to €50m when other criteria hold.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — €43m is the medium balance sheet ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — €2m is the micro balance sheet ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €10m is the small turnover ceiling.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — €2m is the micro turnover ceiling.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — €50m is the medium turnover ceiling.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 37, 'full' ),
( '3.4', 'CASE 3.4.38', 'Incomplete application data', 'Analyze an agency reviews an applicant with nine staff but incomplete turnover data. Evaluate the following economic assertions:', ARRAY['Fifty-one employees instantly relegate a firm to large-enterprise status with no intermediate tier.', 'Both turnover and balance sheet must fail for medium status to be denied.', 'The ninety-nine percent SME statistic refers to business numbers, not GDP share.', 'Meeting the turnover threshold for medium size does not let the firm ignore the balance-sheet criterion entirely.', 'Eleven employees immediately push a business into the large-firm category skipping SME tiers.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Fifty staff fails small but medium tier may still apply.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Breaching either financial cap can block medium classification.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — The statistic measures business counts rather than gdp share.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is true.
', 'FALSE — Either financial cap can disqualify medium status when breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Ten staff fails micro but small and medium tiers still exist.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 38, 'full' ),
( '3.4', 'CASE 3.4.39', 'Medium turnover-only breach', 'Analyze a firm has two hundred staff, €55m turnover, and a €42m balance sheet. Evaluate the following economic assertions:', ARRAY['Passing the balance-sheet test alone does not drop the turnover test from the medium-size classification.', 'Grant schemes ignore official micro thresholds when the applicant is a local shop.', 'A firm with nine staff is confirmed micro without turnover documentation.', 'Both turnover and balance sheet must pass for micro status to be granted.', 'Definitions actively shape finance access and regulatory treatment of firms.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Either financial cap can disqualify medium status when breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Support programmes use standard eu micro criteria.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'FALSE — Only one financial measure must qualify for micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Sme labels affect support and reporting, not just description.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '4/5', 39, 'full' ),
( '3.4', 'CASE 3.4.40', 'SME employment nuance', 'Analyze claims linking SME business counts with employment patterns. Evaluate the following economic assertions:', ARRAY['Meeting one SME criterion alone does not guarantee overall SME status in a tier.', 'Micro enterprises dominate EU business counts as part of the broader SME group.', 'A firm with eight staff is confirmed micro without turnover documentation.', 'Progression through SME tiers follows successive threshold crossings as firms grow.', 'The EU micro cap for turnover is €10m rather than €2m.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Each tier requires joint staff and financial tests.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Micro firms contribute to the ~99% sme majority by number.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Firms can move from micro to small to medium with growth.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — €10m is the small turnover cap, not the micro cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
'], '2/5', 40, 'full' ),
( '3.4', 'CASE 3.4.41', 'Financial cap literacy', 'Analyze students must recall EU financial caps. Evaluate the following economic assertions:', ARRAY['Small enterprises must satisfy staff limits and the €10m turnover cap.', 'Classification review requires both headcount and financial figures for EU SME tiers.', 'A firm crossing medium limits becomes ineligible for certain EU SME finance programmes.', 'Medium enterprises must satisfy staff limits and at least one financial cap.', 'A tech group with three thousand staff is treated as large under EU size rules.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Small uses combined staff and turnover criteria.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Incomplete data prevents reliable sme verification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Sme-tied support excludes firms above medium thresholds.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Medium uses combined staff and financial criteria.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

3,000 employees exceeds all SME staff ceilings.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 41, 'full' ),
( '3.4', 'CASE 3.4.42', 'Micro local economy role', 'Analyze the economic role of micro firms such as local shops and workshops. Evaluate the following economic assertions:', ARRAY['Accounting rule sets can differ between micro firms and large groups such as a components manufacturer.', 'EU SME tables pair each tier with distinct staff and financial ceilings.', 'The EU medium cap for balance sheet is €50m rather than €43m.', 'Labeling €10m as the medium turnover ceiling misstates the EU threshold for that tier.', 'Calling €2m the small turnover cap incorrectly swaps micro and small financial limits.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — Size classification affects applicable accounting rules.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Micro, small, and medium each have separate threshold rows.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — €43m is the medium balance sheet cap in the EU table.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €10m is the small turnover cap, not the medium cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — €2m is the micro turnover cap, not the small cap.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
'], '2/5', 42, 'full' ),
( '3.4', 'CASE 3.4.43', 'Staff-only exam trap', 'Analyze a case lists eight staff and asks whether SME status is certain. Evaluate the following economic assertions:', ARRAY['A small IT-support venture count as a large enterprise because their bakery supplies many customers.', 'One hundred and twenty staff with €52m turnover fails the medium turnover test.', 'About ninety-nine percent of EU employees work in SMEs because ninety-nine percent of firms are SMEs.', 'A components manufacturer counts as a medium enterprise because its Austrian headquarters defines EU size.', 'Two hundred staff with €55m turnover fails the medium turnover test.'], ARRAY[false, true, false, false, true], ARRAY['FALSE — A small IT-support venture illustrate micro-scale operations, not large enterprise status.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
', 'TRUE — €52m exceeds the €50m medium turnover cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — The statistic refers to business numbers, not employment share.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
', 'FALSE — A components manufacturer''s ~10,000 staff exceeds medium limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'TRUE — €55m exceeds the €50m medium turnover cap.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 43, 'full' ),
( '3.4', 'CASE 3.4.44', 'Leaving SME status effects', 'Analyze a firm crosses medium limits and becomes large. Evaluate the following economic assertions:', ARRAY['An engineering firm with two hundred staff can meet the medium staff test.', 'Grant eligibility for micro enterprises requires meeting official micro thresholds.', 'SME verification for bank loans may require proof of headcount and turnover bands.', 'A manufacturer with two hundred forty staff can meet the medium staff test.', 'One hundred and eighty staff with €45m turnover can meet medium staff and turnover tests.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — 200 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Micro grants use standard eu micro criteria.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Lenders check official sme thresholds for guarantee schemes.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — 240 is below the 250-person medium limit.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — 180 staff and €45m turnover fit medium ceilings.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '2/5', 44, 'full' ),
( '3.4', 'CASE 3.4.45', 'Small retailer headroom', 'Consider a retailer that has thirty staff and €9.9m turnover. Evaluate the following economic assertions:', ARRAY['Medium turnover of €49m stays within the €50m medium cap.', 'Micro enterprises are omitted from the ninety-nine percent SME business count.', 'Small turnover of €9.5m stays within the €10m small cap.', 'A firm at eight staff is not confirmed as micro without financial verification.', 'A firm becomes large immediately upon employing a tenth worker.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — €49m meets the medium turnover threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Micro firms are included in sme counts.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is false.
', 'TRUE — €9.5m meets the small turnover threshold.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'TRUE — Headcount alone does not confirm micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Ten staff fails micro but further tiers depend on additional tests.

In the case setting — a retailer that has thirty staff and €9.9m turnover — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 45, 'full' ),
( '3.4', 'CASE 3.4.46', 'Medium mid-range profile', 'Analyze medium classification for a firm with one hundred twenty-five staff, €25m turnover, and €30m balance sheet. Evaluate the following economic assertions:', ARRAY['A firm at nine staff is not confirmed as micro without financial verification.', 'A firm becomes large immediately upon reaching €2.1m turnover.', 'Micro turnover of €1.5m stays within the €2m micro cap.', 'One criterion alone is enough for small status when staff are forty-five.', 'One criterion alone is enough for medium status when turnover is €40m.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Headcount alone does not confirm micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Turnover above €2m removes micro status but small or medium may apply.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — €1.5m meets the micro turnover threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — Small requires turnover at or below €10m as well.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Medium requires sub-250 staff plus financial tests.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'], '4/5', 46, 'full' ),
( '3.4', 'CASE 3.4.47', 'SME synthesis review', 'Analyze EU SME classification principles for exam review. Evaluate the following economic assertions:', ARRAY['Headcount alone confirms small status for a fifty-employee logistics company.', 'Incomplete turnover data still proves micro status when staff are nine.', 'Micro turnover of €1.6m balance sheet context still allows €1.6m balance sheet under €2m cap.', 'Supplier status to phone makers determines a components manufacturer size classification.', 'Headcount alone confirms micro status for a ten-employee family firm.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Fifty staff fails the below-fifty small staff test.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
', 'FALSE — Financial thresholds are mandatory for micro confirmation.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — €1.6m meets the micro balance sheet threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'FALSE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Headcount and financial thresholds determine eu size classification.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Ten staff fails the below-ten micro staff test.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The absolute claim fails because EU size classes are dual tests: staff and a financial alternative. One limb cannot rescue a breach of the other.

The statement is false.
'], '2/5', 47, 'full' ),
( '3.4', 'CASE 3.4.48', 'Turnover-only student error', 'Analyze a student argues a firm is medium because turnover is €40m. Evaluate the following economic assertions:', ARRAY['Micro turnover of €1.7m balance sheet total stays within the €2m micro balance sheet cap.', 'A small IT-support venture serve as micro-scale examples alongside a components manufacturer as a large firm.', 'SME classification principles combine staff ceilings with turnover and/or balance sheet caps.', 'About ninety-nine percent of EU businesses are SMEs by number rather than by employment share alone.', 'Medium balance sheet of €42m stays within the €43m medium cap.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — €1.7m meets the micro balance sheet threshold.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — Course examples contrast micro local ventures with a components manufacturer scale.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is true.
', 'TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Combined criteria define eu sme tiers in the official table.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — The statistic measures business counts.

Roughly ninety-nine percent of businesses registered in the EU fall inside the SME size classes — micro, small, or medium.

The statement is true.
', 'TRUE — €42m meets the medium balance sheet threshold.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
'], '3/5', 48, 'full' ),
( '3.4', 'CASE 3.4.49', 'Village craft micro profile', 'Analyze a village craft business has four staff and €600k turnover. Evaluate the following economic assertions:', ARRAY['An SME may lose access to certain guarantee schemes after reclassification as large.', 'Micro enterprises remain part of MSME groupings alongside small and medium firms.', 'Crossing the medium employee or financial ceiling moves classification toward large enterprise status.', 'Village craft workshops are exempt from EU micro turnover caps.', 'Official size categories matter for EU-backed finance and support programme access.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Sme-tied finance programmes typically exclude large firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Msme terminology covers micro, small, and medium categories together.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Exceeding medium thresholds exits sme bands.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'FALSE — Official staff and financial tests determine micro status.

Under the EU micro test the firm must have fewer than 10 employees and also stay within a financial alternative: turnover ≤ €2m or balance sheet total ≤ €2m. Meeting the staff ceiling alone is not enough if the financial limb is breached.

The statement is false.
', 'TRUE — EU MSME size classes combine a staff ceiling with a financial alternative (turnover or balance sheet). Staff alone never completes the test.

Definitions gate eligibility for sme support.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 49, 'full' ),
( '3.4', 'CASE 3.4.50', 'SME ladder progression', 'Analyze a growing firm on the SME ladder as it adds staff and sales. Evaluate the following economic assertions:', ARRAY['EU SME definitions apply equally regardless of whether a firm operates locally or nationally.', 'Balance sheet totals can disqualify medium status even when turnover appears moderate.', 'Staff headcount alone cannot confirm small status without checking the turnover cap.', 'Medium status requires both turnover and balance sheet below their caps simultaneously.', 'Small status ignores turnover when staff remain below fifty.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — EU small enterprises employ fewer than fifty people and must also meet turnover ≤ €10m or balance sheet ≤ €10m. SMEs (including micro) are the vast majority of EU firms.

Geographic scope does not replace official eu size thresholds.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — The medium balance sheet cap is binding alongside staff limits.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is true.
', 'TRUE — Small classification requires both staff and turnover tests.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is true.
', 'FALSE — Only one financial measure must qualify alongside staff for medium status.

EU medium enterprises have fewer than 250 employees and must also satisfy turnover ≤ €50m or balance sheet ≤ €43m. Both the staff ceiling and one financial alternative belong to the definition.

The statement is false.
', 'FALSE — Small classification requires turnover at or below €10m.

EU small enterprises have fewer than 50 employees and must also satisfy turnover ≤ €10m or balance sheet ≤ €10m. Headcount under fifty does not preserve small status once the financial cap is exceeded.

The statement is false.
'], '2/5', 50, 'full' ),
( '3.5', 'CASE 3.5.01', 'Local bakery scope', 'Consider a neighbourhood bakery that serves walk-in customers within one district. Evaluate the following economic assertions:', ARRAY['A firm is local only if it employs fewer than ten people regardless of customer location.', 'National businesses sell in every country on the same continent by definition.', 'Local and regional firms often face challenges raising funds and finding enough customers.', 'Local and regional businesses typically operate in a limited geographic area with customers nearby.', 'Regional businesses operate worldwide but with smaller marketing budgets than multinationals.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local scope is defined by operating area and customer proximity, not sme headcount.

Against the scenario (a neighbourhood bakery that serves walk-in customers within one district), the claim attaches the wrong label.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope is confined to the home country, not continental reach.

In the case setting — a neighbourhood bakery that serves walk-in customers within one district — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Funding access and customer reach are cited challenges for geographically focused firms.

The scenario (a neighbourhood bakery that serves walk-in customers within one district) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local/regional scope is defined by a restricted operating area and proximate customers.

In the case setting — a neighbourhood bakery that serves walk-in customers within one district — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional firms remain within a limited territory, not worldwide.

In the case setting — a neighbourhood bakery that serves walk-in customers within one district — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 1, 'full' ),
( '3.5', 'CASE 3.5.02', 'Regional supplier reach', 'Consider a regional dairy that delivers to shops across one province. Evaluate the following economic assertions:', ARRAY['Undercapitalisation is unknown among local firms once they register for VAT.', 'A national business operates within its home country rather than across foreign markets.', 'Undercapitalisation is a risk particularly associated with smaller geographically focused firms.', 'A website visible abroad makes a firm multinational even without cross-border sales.', 'National operations typically involve a longer supply chain than a very local producer.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Registration does not remove capital constraints noted for local/regional firms.

Against the scenario (a regional dairy that delivers to shops across one province), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope confines activity to the home country.

The scenario (a regional dairy that delivers to shops across one province) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited capital is linked to local and regional business constraints.

In the case setting — a regional dairy that delivers to shops across one province — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Online presence alone does not equal cross-border production or sales.

Against the scenario (a regional dairy that delivers to shops across one province), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National activity lengthens supply chains compared with very local operations.

The scenario (a regional dairy that delivers to shops across one province) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 2, 'full' ),
( '3.5', 'CASE 3.5.03', 'National retailer chain', 'Consider a home-country supermarket chain that sources nationally but sells only domestically. Evaluate the following economic assertions:', ARRAY['Globalisation means every small shop becomes a multinational overnight.', 'International or multinational firms make and/or sell in more than one country.', 'International business uses one legal system worldwide so compliance is uniform.', 'National supply chains are shorter than local ones because transport is faster domestically.', 'Local businesses face no difficulty finding customers because proximity guarantees demand.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation refers to rising multinational enterprise activity, not all shops.

In the case setting — a home-country supermarket chain that sources nationally but sells only domestically — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border production or sales define international/multinational scope.

The scenario (a home-country supermarket chain that sources nationally but sells only domestically) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple legal systems apply across countries.

In the case setting — a home-country supermarket chain that sources nationally but sells only domestically — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

States national chains are longer than local ones.

Against the scenario (a home-country supermarket chain that sources nationally but sells only domestically), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local/regional firms can struggle to find enough customers despite nearby catchments.

Against the scenario (a home-country supermarket chain that sources nationally but sells only domestically), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 3, 'full' ),
( '3.5', 'CASE 3.5.04', 'Multinational manufacturer scope', 'Consider A components manufacturer that manufactures and sells across several countries. Evaluate the following economic assertions:', ARRAY['Regional scope allows unlimited customers anywhere on the globe.', 'Globalisation is described as the rise of multinational enterprises operating across borders.', 'Selling nationwide while owners stay in one town makes the business local by residence.', 'International business must cope with different cultures, languages, and currencies.', 'Operating internationally lengthens the supply chain and crosses legal and economic systems.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional businesses serve a limited area, not global markets.

Against the scenario (A components manufacturer that manufactures and sells across several countries), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation is tied to spreading multinational enterprise activity.

In the case setting — a components manufacturer that manufactures and sells across several countries — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Nationwide sales indicate national scope despite owner location.

Against the scenario (A components manufacturer that manufactures and sells across several countries), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cultures, languages, and currencies are named complications of international business.

The scenario (A components manufacturer that manufactures and sells across several countries) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

International scope brings longer chains plus differing legal and economic frameworks.

The scenario (A components manufacturer that manufactures and sells across several countries) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 4, 'full' ),
( '3.5', 'CASE 3.5.05', 'Local customer proximity', 'Analyze what defines a local or regional business by customer and operating area. Evaluate the following economic assertions:', ARRAY['Manufacturing in one country and selling in another indicates international/multinational scope.', 'Customer proximity and a limited service area characterise local business scope.', 'Regional businesses still operate within a defined territory rather than worldwide.', 'Selling only within the home country fits national rather than international scope.', 'A multinational must produce in every country where it sells by definition.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border production combined with foreign sales exceeds national boundaries.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local firms chiefly serve nearby customers within a restricted area.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional scope remains geographically bounded though broader than a single neighbourhood.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Home-country-only sales align with national classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Making and/or selling in more than one country suffices; both everywhere is not required.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 5, 'full' ),
( '3.5', 'CASE 3.5.06', 'Regional funding challenge', 'Consider a regional craft firm that struggles to raise funds and find customers. Evaluate the following economic assertions:', ARRAY['A components manufacturer operating across countries illustrates a multinational enterprise reinventing its model.', 'Limited capital can constrain a local firm''s ability to expand beyond its immediate market.', 'Currency differences disappear once a firm opens a foreign bank account.', 'Undercapitalisation affects only multinational firms building foreign factories.', 'Culture and language differences matter only to tourist shops, not to manufacturers.'], ARRAY[true, true, false, false, false], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

A components manufacturer exemplifies large-scale multinational scope.

The scenario (a regional craft firm that struggles to raise funds and find customers) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Undercapitalisation limits growth for geographically focused firms.

In the case setting — a regional craft firm that struggles to raise funds and find customers — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Operating across borders still involves multiple currencies.

Against the scenario (a regional craft firm that struggles to raise funds and find customers), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Links undercapitalisation chiefly to local/regional business challenges.

Against the scenario (a regional craft firm that struggles to raise funds and find customers), the claim attaches the wrong label.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Cultures and languages apply to international business generally.

In the case setting — a regional craft firm that struggles to raise funds and find customers — the sentence mislabels the category or overreaches.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'], '2/5', 6, 'full' ),
( '3.5', 'CASE 3.5.07', 'Undercapitalisation risk', 'Consider undercapitalisation as a challenge linked to smaller geographic scope. Evaluate the following economic assertions:', ARRAY['Importing finished goods for domestic resale makes a firm a manufacturer in two countries.', 'Multiple legal systems apply when a firm conducts business in several countries.', 'Language differences matter for customer contact in international markets.', 'Globalisation excludes service firms and applies only to factories.', 'A longer supply chain is typical when sourcing and selling nationally rather than locally.'], ARRAY[false, true, true, false, true], ARRAY['FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Domestic resale of imports is not the same as producing abroad.

Against the scenario (undercapitalisation as a challenge linked to smaller geographic scope), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

International operations cross differing legal frameworks.

In the case setting — undercapitalisation as a challenge linked to smaller geographic scope — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Languages are among international business complications.

In the case setting — undercapitalisation as a challenge linked to smaller geographic scope — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation concerns multinational enterprise broadly, not factories alone.

Against the scenario (undercapitalisation as a challenge linked to smaller geographic scope), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope implies greater supply chain length than local operations.

The scenario (undercapitalisation as a challenge linked to smaller geographic scope) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 7, 'full' ),
( '3.5', 'CASE 3.5.08', 'National supply chain length', 'Analyze supply chain length for a national manufacturer versus a local workshop. Evaluate the following economic assertions:', ARRAY['Proximity to customers removes any need to seek sales for local firms.', 'National businesses operate in more than one country as long as they use domestic currency.', 'Currency differences arise when trading across international borders.', 'A components manufacturer is a local enterprise because its first plant was in one town.', 'Globalisation reflects more firms producing and selling beyond a single country.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Finding customers remains a cited challenge for local/regional firms.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National firms stay within the home country.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple currencies are part of international business conditions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

A components manufacturer exemplifies large multinational scope with cross-border activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Rising multinationals underpin the view of globalisation.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 8, 'full' ),
( '3.5', 'CASE 3.5.09', 'International legal complexity', 'Analyze a firm sells in three countries with differing contract laws. Evaluate the following economic assertions:', ARRAY['Regional hauliers moving goods within a territory still face geographic limits compared with national networks.', 'Regional firms can ignore capital needs because banks lend equally in every village.', 'Domestic-only sales and production within one country describe national scope.', 'Cross-border manufacturing is still national if headquarters stays at home.', 'A plumber serving one town operates locally with nearby customers.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Regional scope is broader than local but remains below national/international reach.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Raising funds is a stated challenge for local/regional businesses.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Confining activity to the home country is national classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Production abroad contributes to international/multinational scope.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Single-town service fits local scope with proximate customers.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 9, 'full' ),
( '3.5', 'CASE 3.5.10', 'Globalisation definition', 'Analyze globalisation as described through the rise of multinational enterprises. Evaluate the following economic assertions:', ARRAY['Cross-border production partnerships indicate international rather than purely national scope.', 'International firms use identical economic systems in every market they enter.', 'A domestic-only rail network is multinational because cargo may originate from imports.', 'Local scope is determined solely by whether the firm is an SME under EU rules.', 'Exporting forty percent of output while producing at home cannot coexist with any national label.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign production links exceed national boundaries.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Economic systems differ internationally.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic routing fits national scope unless operating across countries.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Geographic scope and sme size classification are separate concepts.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Export sales cross national boundaries and affect scope labels.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
'], '2/5', 10, 'full' ),
( '3.5', 'CASE 3.5.11', 'Local versus national trap', 'Analyze a shop sells nationwide online but is described as local because owners live nearby. Evaluate the following economic assertions:', ARRAY['Regional branding across neighbouring counties remains below national or international scope.', 'National airlines operating domestic routes are local because planes land nearby.', 'Local businesses depend heavily on customers in the immediate area.', 'Multinational status requires ignoring local cultures to enforce one corporate language.', 'Regional seasonal hotels face no customer-finding challenge during off-season months.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional reach is limited compared with country-wide or cross-border operations.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide networks reflect national rather than local scope.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Proximate customers define local enterprise markets.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cultural differences remain relevant in international operations.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Seasonal regional demand illustrates limited customer-base constraints.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 11, 'full' ),
( '3.5', 'CASE 3.5.12', 'Regional market limits', 'Analyze a regional tour operator serves holidaymakers across neighbouring counties only. Evaluate the following economic assertions:', ARRAY['Compliance costs increase when obeying rules in several countries simultaneously.', 'Local market saturation is impossible where population is growing.', 'Regional grants prove a firm is multinational because money crosses municipal borders.', 'Undercapitalisation can hinder fund raising for firms focused on a small market area.', 'Stakeholder geography is unrelated to whether a firm is multinational.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multiple jurisdictions raise legal compliance burdens internationally.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Saturation concerns nearby customers already served, not population trends alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional support targets limited-area firms, not multinational classification.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited capital is a stated challenge for local/regional firms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multinational operations spread activities and stakeholders across countries.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 12, 'full' ),
( '3.5', 'CASE 3.5.13', 'National home country focus', 'Analyze a publisher prints and distributes exclusively within its home country. Evaluate the following economic assertions:', ARRAY['Multinational operations spread stakeholders and activities across countries.', 'National scale eliminates supply chain length because everything is domestic.', 'International business avoids longer supply chains by using email orders.', 'Seasonal regional tourism income reflects a geographically limited customer base.', 'A domestic rail freight network operating nationally has a longer chain than a neighbourhood supplier.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border operations widen geographic stakeholder and activity reach.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scope still lengthens chains compared with very local producers.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

International operations lengthen supply chains.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional seasonal demand fits limited-area customer dependence.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National logistics extend supply chains beyond local reach.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 13, 'full' ),
( '3.5', 'CASE 3.5.14', 'Multinational production', 'Consider a car parts firm produces in two countries and that sells in five. Evaluate the following economic assertions:', ARRAY['Home-country-only publishers are international if they translate books into another language.', 'A provincial dairy delivering within one province is a multinational because milk crosses county lines.', 'Local cafés face no undercapitalisation risk if they accept card payments.', 'Globalisation means national firms disappear entirely from the home economy.', 'Local market saturation occurs when most nearby customers are already served.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Translation alone without foreign sales or production does not establish international scope.

In the case setting — a car parts firm produces in two countries and that sells in five — the sentence mislabels the category or overreaches.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Intraprovincial delivery remains regional, not international.

Against the scenario (a car parts firm produces in two countries and that sells in five), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Payment methods do not remove capital constraints on expansion.

Against the scenario (a car parts firm produces in two countries and that sells in five), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation highlights rising multinationals, not elimination of national firms.

In the case setting — a car parts firm produces in two countries and that sells in five — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Limited local demand can saturate when proximate customers are exhausted.

In the case setting — a car parts firm produces in two countries and that sells in five — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 14, 'full' ),
( '3.5', 'CASE 3.5.15', 'Currency exposure abroad', 'Analyze an exporter invoices in euros and dollars across borders. Evaluate the following economic assertions:', ARRAY['National scale operations extend supply chains across the home country.', 'Policy support for regional firms often targets limited-area operators.', 'Importing for domestic resale alone does not by itself make a firm a multinational manufacturer.', 'Local scope means both limited operating area and chiefly nearby customers.', 'Operating in two countries eliminates exposure to different currencies.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide activity lengthens domestic supply chains.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional programmes align with geographically bounded businesses.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Reselling imports domestically differs from producing across countries.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Pairs limited area with customer proximity for local/regional firms.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multiple currencies remain a factor across borders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 15, 'full' ),
( '3.5', 'CASE 3.5.16', 'Cultural differences trade', 'Analyze staff manage teams across cultures in multiple subsidiaries. Evaluate the following economic assertions:', ARRAY['International firms encounter varied economic systems across markets.', 'A neighbourhood bakery with walk-in local buyers is not national merely because it is registered as a company.', 'Operating in more than one country increases coordination across languages and currencies.', 'Cultural awareness matters when managing staff and customers in foreign subsidiaries.', 'Exporting a minority share while producing domestically may still be national if foreign sales are absent.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Economic systems differ internationally alongside legal frameworks.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Scope follows market reach, not registration formalities alone.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multinational activity multiplies language and currency management needs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Cultural differences are part of international business complexity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Scope labels depend on where firms make and sell, not a single metric alone.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 16, 'full' ),
( '3.5', 'CASE 3.5.17', 'Language barriers commerce', 'Analyze customer support handles queries in four languages across markets. Evaluate the following economic assertions:', ARRAY['Globalisation. emphasises multinational enterprise growth.', 'National wholesalers have shorter supply chains than street vendors by definition.', 'Regional competitors are irrelevant because regional firms share identical customers.', 'Regional firms may struggle to fund growth because their customer base stays geographically bounded.', 'National retailers sourcing nationwide face longer supply chains than district shops.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation is tied to rising multinationals in the course framework.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National networks typically lengthen supply chains versus very local vendors.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional rivals operate within the same limited area competing for customers.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Limited markets tie to funding and customer-finding challenges.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National sourcing extends chains compared with local suppliers.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 17, 'full' ),
( '3.5', 'CASE 3.5.18', 'Local undercapitalisation myth', 'Analyze whether undercapitalisation affects only local firms and not national ones. Evaluate the following economic assertions:', ARRAY['Multinationals combine cross-border production or sales with complex legal environments.', 'Any online shop is global scope even if it ships only within one city.', 'Local community reliance proves the firm is a multinational serving global communities.', 'Paying tax only at home proves multinational status because tax law is international.', 'Joint ventures abroad are still purely national if products return home for sale only.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

International scope pairs geographic spread with legal/economic diversity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited shipping area indicates local/regional rather than global reach.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Dependence on nearby communities indicates local/regional, not global, scope.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic tax on home-country sales fits national scope.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Foreign production partnerships indicate international activity.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 18, 'full' ),
( '3.5', 'CASE 3.5.19', 'National longer chain', 'Analyze a national food brand sources ingredients through a longer domestic supply chain. Evaluate the following economic assertions:', ARRAY['A home-country-only telecom operator fits national rather than multinational classification.', 'International compliance costs fall when more countries'' rules apply simultaneously.', 'International scope requires crossing national borders in making and/or selling goods.', 'Undercapitalisation is cited as a challenge for smaller geographically limited businesses.', 'Local enterprises chiefly compete for customers who live or work nearby.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic-only operations align with national scope.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple jurisdictions raise, not reduce, compliance burdens.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

More than one country in production or sales defines international/multinational scope.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited capital is linked to local/regional constraints.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Customer proximity is central to local business definition.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 19, 'full' ),
( '3.5', 'CASE 3.5.20', 'International sales only', 'Analyze a firm imports finished goods for domestic resale without foreign production. Evaluate the following economic assertions:', ARRAY['A firm that manufactures abroad but sells only at home still crosses into international scope.', 'Undercapitalisation is solved once a regional firm wins one large nearby contract.', 'Geographic scope labels depend on where a firm operates and sells, not owner residence alone.', 'Undercapitalisation can also affect national firms seeking rapid nationwide expansion.', 'Domestic public tenders make a firm multinational by exposing it to government rules.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign production alone can establish international/multinational classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

A single contract does not remove structural capital constraints.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Scope follows business activity geography, not where owners live.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Capital constraints are emphasised for local/regional firms but are not exclusive to them.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

National procurement within one country remains national scope.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 20, 'full' ),
( '3.5', 'CASE 3.5.21', 'Globalisation multinationals', 'Consider globalisation trends linked to spreading multinational activity. Evaluate the following economic assertions:', ARRAY['National wholesalers coordinating suppliers across the home country face longer chains than street vendors.', 'A firm that sells in three countries is still national if its logo uses the home flag.', 'Selling in two countries qualifies as international even if production stays entirely domestic.', 'Regional delivery across several counties within one country remains below international scope.', 'Globalisation describes a trend toward more cross-border enterprise activity.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide sourcing lengthens supply chains versus very local vendors.

The scenario (globalisation trends linked to spreading multinational activity) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Sales in multiple countries indicate international/multinational scope.

In the case setting — globalisation trends linked to spreading multinational activity — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border sales alone can establish international scope under the make-or-sell test.

In the case setting — globalisation trends linked to spreading multinational activity — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Intra-country regional reach does not equal cross-border international activity.

The scenario (globalisation trends linked to spreading multinational activity) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Links globalisation to the rise of multinationals.

The scenario (globalisation trends linked to spreading multinational activity) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 21, 'full' ),
( '3.5', 'CASE 3.5.22', 'Regional customer base', 'Analyze a furniture maker sells chiefly to buyers within a two-hour drive. Evaluate the following economic assertions:', ARRAY['Local/regional firms may lack funds to invest in marketing beyond their immediate catchment area.', 'A neighbourhood bakery is multinational because tourists sometimes buy bread.', 'Different currencies complicate pricing and payment for firms trading across borders.', 'Local/regional and national scopes are identical whenever the firm uses domestic suppliers.', 'Globalisation and multinational growth are unrelated trends.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Undercapitalisation limits outreach for geographically bounded firms.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Occasional tourist purchases do not establish cross-border make-or-sell activity.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Currency variation is a named factor in international business.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic suppliers alone do not collapse geographic scope distinctions.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Links globalisation to the rise of multinationals.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 22, 'full' ),
( '3.5', 'CASE 3.5.23', 'Local area definition', 'Analyze local business scope using operating area and customer proximity. Evaluate the following economic assertions:', ARRAY['National scope requires exporting to at least one foreign market.', 'International supply chains typically extend further than national domestic networks.', 'A national food brand distributing only domestically fits national rather than multinational scope.', 'Proximity of customers does not remove the need to compete for sales in local markets.', 'Multinational groups must reconcile HR practices across subsidiaries in different legal environments.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National firms operate within the home country without requiring exports.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border operations add length and complexity to supply chains.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic-only distribution within one country aligns with national classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local/regional firms can still struggle to find enough customers despite nearby catchments.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign subsidiaries bring varied legal and cultural hr contexts.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 23, 'full' ),
( '3.5', 'CASE 3.5.24', 'National boundary trade', 'Analyze a telecom sells mobile plans only within one country''s borders. Evaluate the following economic assertions:', ARRAY['Globalisation refers only to cultural exchange with no link to enterprise geography.', 'Multinational scope demands production and sales in every country on every continent.', 'Undercapitalisation applies exclusively to local firms and cannot affect national operators.', 'Regional firms are international because they cross internal county borders.', 'A regional brewery selling across one province but not abroad fits regional scope.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Ties globalisation to multinational enterprise growth.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Make-or-sell in more than one country suffices; universal presence is not required.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Capital constraints are emphasised for local/regional firms but are not exclusive to them.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Crossing counties within one country remains regional, not international.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Provincial reach within one country is regional, not international.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 24, 'full' ),
( '3.5', 'CASE 3.5.25', 'Multinational reinvented firm', 'Consider a components manufacturer expanded abroad and reinvented its business model. Evaluate the following economic assertions:', ARRAY['Operating nationally implies a longer supply chain than serving one neighbourhood.', 'Cross-border sales expose a firm to multiple legal and economic systems.', 'Local scope is not determined by EU SME headcount thresholds.', 'A components manufacturer illustrates how a firm can operate as a multinational with plants and customers abroad.', 'Regional firms compete for customers within the same limited territory.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Contrasts longer national chains with shorter local ones.

The scenario (a components manufacturer expanded abroad and reinvented its business model) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

International activity crosses differing legal and economic frameworks.

In the case setting — a components manufacturer expanded abroad and reinvented its business model — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Geographic scope and enterprise size classification are separate concepts.

In the case setting — a components manufacturer expanded abroad and reinvented its business model — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

A components manufacturer is the course example of cross-border production and sales.

In the case setting — a components manufacturer expanded abroad and reinvented its business model — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional rivals share geographically bounded markets.

The scenario (a components manufacturer expanded abroad and reinvented its business model) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 25, 'full' ),
( '3.5', 'CASE 3.5.26', 'Local fund raising', 'Analyze a local café owner struggles to fund expansion beyond the high street. Evaluate the following economic assertions:', ARRAY['Manufacturing in Austria and selling in Germany satisfies the multinational make-or-sell criterion.', 'Limited capital makes it harder for small-area firms to scale marketing or stock levels.', 'Globalisation is associated with multinational firms rather than purely local street traders.', 'Local scope is established when the owner walks to work regardless of customer location.', 'National scope excludes routine foreign production even when imports supply raw materials.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Production in one country and sales in another indicate international scope.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Undercapitalisation constrains growth for geographically focused businesses.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation centres on rising cross-border enterprise activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Scope follows customer and operating geography, not owner commuting.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Using imported inputs domestically does not by itself make a firm multinational.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 26, 'full' ),
( '3.5', 'CASE 3.5.27', 'Regional competitor pressure', 'Analyze regional retailers face rivals in nearby towns within the same area. Evaluate the following economic assertions:', ARRAY['A district repair shop with walk-in local trade operates at local geographic scope.', 'International firms must manage communication across language differences with customers and staff.', 'Selling mobile contracts nationwide within Austria alone fits national scope.', 'Joint production abroad signals international activity even if finished goods return home.', 'Regional seasonal hotels depend on visitors drawn from a limited geographic catchment.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Nearby walk-in customers within a small area fit local classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Language barriers are part of international business complexity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide domestic sales without foreign markets align with national classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign production partnerships exceed purely national scope.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Seasonal regional tourism reflects bounded customer geography.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 27, 'full' ),
( '3.5', 'CASE 3.5.28', 'National distribution network', 'Analyze a national wholesaler routes goods through warehouses across the home country. Evaluate the following economic assertions:', ARRAY['Local grocers rely on residents and workers living close to the store for most sales.', 'National airlines flying domestic routes reflect national operating scope.', 'Compliance with several countries'' regulations raises costs for international operators.', 'Undercapitalisation is highlighted for local/regional firms but can also constrain ambitious national start-ups.', 'Multinational status follows cross-border make-or-sell activity rather than logo design.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Dependence on nearby communities indicates local/regional scope.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide domestic networks align with national classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple jurisdictions increase international compliance burdens.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Capital shortage is emphasised for small-area firms yet not limited to them alone.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Scope classification depends on geographic activity, not branding alone.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 28, 'full' ),
( '3.5', 'CASE 3.5.29', 'Cross-border manufacturing', 'Analyze components are assembled in one country and packaged in another for export. Evaluate the following economic assertions:', ARRAY['Regional development support often targets firms serving limited local or regional markets.', 'A national manufacturer sourcing nationwide has a longer chain than a town-based workshop.', 'Cultural differences influence management and customer relations in multinational subsidiaries.', 'International firms share one worldwide currency once they join the WTO.', 'Export sales to neighbouring countries cross national boundaries and affect scope labels.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Policy programmes frequently aim at geographically bounded operators.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National scale lengthens supply chains relative to very local producers.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Culture is among the international factors named.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple currencies remain in cross-border business.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Foreign sales contribute to international rather than purely domestic scope.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 29, 'full' ),
( '3.5', 'CASE 3.5.30', 'Globalisation rise trend', 'Analyze whether globalisation chiefly means more firms operating across borders. Evaluate the following economic assertions:', ARRAY['A firm visible online but shipping only within one city remains local/regional in scope.', 'A national supermarket chain is local because each store serves a neighbourhood.', 'Regional branding across provinces makes a firm multinational.', 'Supply chains shorten when a firm expands from local to national scope.', 'A components manufacturer counts as regional because its Austrian roots define scope permanently.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Limited delivery geography indicates local/regional rather than international reach.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide domestic retail networks reflect national scope.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Intra-country regional branding differs from cross-border operations.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

States national chains are longer than local ones.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

A components manufacturer operates internationally with cross-border production and sales.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 30, 'full' ),
( '3.5', 'CASE 3.5.31', 'Local service radius', 'Consider a plumber that serves households within one town only. Evaluate the following economic assertions:', ARRAY['Local firms need not find customers because word of mouth fills every nearby home.', 'International operations require awareness of differing economic systems in each market.', 'Local market saturation can occur when most proximate customers already purchase from the firm.', 'Selling domestically online nationwide is local scope because the website is small.', 'International business faces one uniform culture if staff speak English.'], ARRAY[false, true, true, false, false], ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Finding enough customers remains a challenge for local/regional firms.

In the case setting — a plumber that serves households within one town only — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Economic systems vary across countries in international business.

In the case setting — a plumber that serves households within one town only — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Nearby customer pools can become saturated for local operators.

In the case setting — a plumber that serves households within one town only — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Nationwide domestic online sales indicate national scope.

Against the scenario (a plumber that serves households within one town only), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cultural differences persist internationally despite a common working language.

Against the scenario (a plumber that serves households within one town only), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 31, 'full' ),
( '3.5', 'CASE 3.5.32', 'Regional logistics limits', 'Analyze regional hauliers move goods within a defined territory but not abroad. Evaluate the following economic assertions:', ARRAY['National telecom operators are multinationals when callers use roaming abroad.', 'Currency exposure arises when invoicing and receiving payment in more than one monetary unit.', 'Globalisation and multinational growth are linked trends.', 'Regional hauliers confined to one territory do not qualify as multinationals.', 'National public procurement within one country does not establish multinational scope.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Customer roaming abroad does not make a domestic operator multinational.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multiple currencies complicate international transactions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

The course connects globalisation to spreading multinational activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Territory-limited haulage within one country is regional, not international.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic tendering remains national activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 32, 'full' ),
( '3.5', 'CASE 3.5.33', 'National procurement rules', 'Analyze public tenders restrict bidders to national registered firms. Evaluate the following economic assertions:', ARRAY['Cross-border manufacturing is national when products are shipped back to the home market only.', 'International scope can arise from foreign sales alone when domestic production continues at home.', 'Local cafés may struggle to raise expansion capital despite steady neighbourhood footfall.', 'A home-country publisher distributing only domestically fits national scope despite foreign-language titles.', 'Multinational enterprises coordinate activities across borders under varied legal rules.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Foreign production contributes to international/multinational scope.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Make-or-sell logic allows international classification through cross-border sales.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Undercapitalisation can limit local firms even with regular nearby customers.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Translation without foreign sales or production does not establish international scope.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border operations encounter multiple legal systems.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 33, 'full' ),
( '3.5', 'CASE 3.5.34', 'International joint venture', 'Analyze two firms from different countries form a production alliance abroad. Evaluate the following economic assertions:', ARRAY['International scope is limited to firms that sell in more than ten countries.', 'Globalisation requires every national firm to open a foreign subsidiary.', 'Regional hauliers become international by crossing a motorway border sign within one country.', 'Undercapitalisation disappears for local firms that join a trade association.', 'Regional exporters shipping to nearby foreign markets cross into international scope.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

More than one country in make-or-sell suffices for international classification.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation describes a trend of rising multinationals, not mandatory foreign units.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Motorway routing within one country does not create international scope.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Membership does not remove capital constraints on geographic expansion.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Sales beyond the home country contribute to international classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 34, 'full' ),
( '3.5', 'CASE 3.5.35', 'Local community reliance', 'Consider a local grocer that depends on nearby residents for most revenue. Evaluate the following economic assertions:', ARRAY['Stakeholder geography widens when production and sales spread across countries.', 'Globalisation refers to increasing cross-border business activity led by multinationals.', 'National distribution networks span the home country and lengthen logistics chains.', 'Local enterprises serve customers who chiefly live or work within easy reach of the firm.', 'Undercapitalisation makes fund raising harder for firms tied to small geographic markets.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Multinational activity spreads stakeholders internationally.

In the case setting — a local grocer that depends on nearby residents for most revenue — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Defines globalisation through multinational enterprise growth.

The scenario (a local grocer that depends on nearby residents for most revenue) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide distribution extends domestic supply chains.

In the case setting — a local grocer that depends on nearby residents for most revenue — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Easy physical reach defines local customer proximity.

The scenario (a local grocer that depends on nearby residents for most revenue) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Limited catchments compound capital-raising difficulty for local/regional firms.

In the case setting — a local grocer that depends on nearby residents for most revenue — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 35, 'full' ),
( '3.5', 'CASE 3.5.36', 'Regional brand recognition', 'Analyze a brewery brands itself across one region but not nationally. Evaluate the following economic assertions:', ARRAY['A provincial dairy delivering within one province remains regional rather than multinational.', 'Operating in three countries with separate contract laws illustrates international legal complexity.', 'National retailers remain national when all stores and sales stay inside the home country.', 'International firms face both longer supply chains and diverse legal environments.', 'Regional branding across neighbouring counties does not equate to multinational scope.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Intraprovincial delivery stays within regional scope.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple legal systems accompany multi-country operations.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic store networks without foreign sales fit national scope.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

International scope combines chain length with legal complexity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional identity within one country differs from cross-border operations.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 36, 'full' ),
( '3.5', 'CASE 3.5.37', 'National tax jurisdiction', 'Analyze corporate tax is paid only in the home country while all sales stay domestic. Evaluate the following economic assertions:', ARRAY['Regional tour operators serving neighbouring counties only fit regional geographic scope.', 'Multinational classification requires activity in more than one country through making and/or selling.', 'Cross-border assembly in one country and packaging in another indicates international production scope.', 'Local/regional businesses may find customer numbers insufficient for rapid growth.', 'National food brands with country-wide sourcing face longer domestic supply chains than corner shops.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Cross-county service within one country remains regional.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Either cross-border production or sales can establish international scope.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Splitting production stages across countries exceeds national boundaries.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Finding enough customers is a stated challenge for geographically focused firms.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National sourcing extends chains beyond neighbourhood suppliers.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 37, 'full' ),
( '3.5', 'CASE 3.5.38', 'Multinational HR policies', 'Analyze hR policies differ by subsidiary country in a group with foreign plants. Evaluate the following economic assertions:', ARRAY['International business crosses cultures as well as legal and economic systems.', 'Multinational HR policies are identical worldwide by definition.', 'Globalisation highlights growth of firms operating beyond a single country.', 'Local/regional firms have longer supply chains than national manufacturers.', 'Limited capital restricts a local firm''s ability to widen its customer catchment.'], ARRAY[true, false, true, false, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Culture joins legal, economic, language, and currency factors internationally.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Subsidiaries often adapt hr to local legal and cultural conditions.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border enterprise expansion defines globalisation.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

National operations typically involve longer chains than very local producers.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Undercapitalisation constrains geographic expansion for small-area firms.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '1/5', 38, 'full' ),
( '3.5', 'CASE 3.5.39', 'Local versus global trap', 'Analyze a student labels any online shop as global regardless of sales geography. Evaluate the following economic assertions:', ARRAY['A components manufacturer demonstrates multinational scope through foreign plants and international customers.', 'National airlines are local because passengers board at nearby airports.', 'Regional seasonal tourism proves multinational scope because visitors hold foreign passports.', 'A firm importing components for domestic assembly is a manufacturer in the supplier''s country.', 'A telecom restricted to domestic mobile plans within one country fits national scope.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

The course uses a components manufacturer as a cross-border enterprise example.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic airport networks reflect national operating scope.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign passport holders visiting a regional hotel do not make the hotel multinational.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Using imported inputs domestically differs from producing abroad.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic-only service plans align with national classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 39, 'full' ),
( '3.5', 'CASE 3.5.40', 'Regional export share', 'Consider a regional exporter that sends forty percent of output to neighbouring countries. Evaluate the following economic assertions:', ARRAY['Local scope follows where customers are served, not where company directors live.', 'Selling nationwide online from one town still indicates national scope rather than local.', 'Foreign subsidiaries subject HR policy to local legal and cultural conditions.', 'National wholesalers routing goods through domestic warehouses operate at national scope.', 'Regional seasonal demand shows how customer bases can be geographically bounded.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Activity geography determines scope rather than owner residence.

In the case setting — a regional exporter that sends forty percent of output to neighbouring countries — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide domestic sales exceed local scope despite owner location.

The scenario (a regional exporter that sends forty percent of output to neighbouring countries) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Multinational hr must adapt to country-specific contexts.

The scenario (a regional exporter that sends forty percent of output to neighbouring countries) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide domestic logistics align with national classification.

The scenario (a regional exporter that sends forty percent of output to neighbouring countries) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Seasonality within a limited area reflects regional market limits.

The scenario (a regional exporter that sends forty percent of output to neighbouring countries) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 40, 'full' ),
( '3.5', 'CASE 3.5.41', 'National single market', 'Analyze a rail operator carries freight nationwide on domestic routes only. Evaluate the following economic assertions:', ARRAY['Local firms compete chiefly for nearby residents and workers as customers.', 'Globalisation and multinational activity are separate unrelated concepts.', 'International legal complexity disappears when contracts are written in English.', 'International compliance grows when a firm must meet rules in each country of operation.', 'Local market saturation cannot occur where a firm offers unique products.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Local markets centre on proximate customer pools.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

The course links globalisation to the rise of multinationals.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Multiple legal systems still apply across countries.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Each operating country adds compliance obligations internationally.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Uniqueness does not prevent nearby customer pools from becoming saturated.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 41, 'full' ),
( '3.5', 'CASE 3.5.42', 'International compliance cost', 'Analyze legal compliance costs rise when operating under multiple countries'' rules. Evaluate the following economic assertions:', ARRAY['Globalisation is not limited to manufacturing and applies to cross-border enterprise generally.', 'Undercapitalisation remains a risk when local firms cannot finance wider marketing campaigns.', 'Regional development grants convert recipients into multinationals.', 'Regional hauliers moving goods within a defined territory stay below international scope.', 'Manufacturing abroad while selling at home still involves international production scope.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Globalisation concerns multinational activity broadly, not factories alone.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Limited funds restrict outreach beyond immediate markets.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional grants support limited-area firms without establishing cross-border scope.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Territory-bound haulage without cross-border routes is regional.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign manufacturing crosses national boundaries in the make-or-sell framework.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 42, 'full' ),
( '3.5', 'CASE 3.5.43', 'Local capital constraints', 'Consider limited capital makes it harder for a local firm to expand its market area. Evaluate the following economic assertions:', ARRAY['Undercapitalisation is irrelevant once a local firm obtains a bank overdraft.', 'National rail freight on domestic routes reflects national operating scope.', 'International firms avoid currency issues by invoicing only in the home currency abroad.', 'Selling in two countries is still national if both countries share a border.', 'National wholesalers are local because each warehouse serves nearby shops.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Overdraft access does not fully remove structural capital constraints.

In the case setting — limited capital makes it harder for a local firm to expand its market area — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic route networks fit national classification.

The scenario (limited capital makes it harder for a local firm to expand its market area) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cross-border trade still involves currency conversion and exposure.

Against the scenario (limited capital makes it harder for a local firm to expand its market area), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Cross-border sales indicate international scope regardless of adjacency.

Against the scenario (limited capital makes it harder for a local firm to expand its market area), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide domestic logistics align with national scope.

In the case setting — limited capital makes it harder for a local firm to expand its market area — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 43, 'full' ),
( '3.5', 'CASE 3.5.44', 'Regional seasonal demand', 'Analyze a seaside hotel relies on regional seasonal visitors. Evaluate the following economic assertions:', ARRAY['International joint ventures abroad signal cross-border enterprise activity.', 'A provincial dairy is national because it supplies an entire province.', 'Multinational scope requires identical products in every foreign market.', 'Local grocers depending on nearby residents illustrate customer proximity in local scope.', 'Multinational groups coordinate languages and currencies across border-spanning operations.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign production alliances exceed purely national scope.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Provincial reach within one country fits regional scope, not national country-wide scope alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Make-or-sell in more than one country suffices without uniform product lines.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Most revenue from proximate residents indicates local/regional scope.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Language and currency management intensify with cross-border activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 44, 'full' ),
( '3.5', 'CASE 3.5.45', 'National carrier dependency', 'Analyze a national airline depends on domestic airports though it faces international rivals. Evaluate the following economic assertions:', ARRAY['National procurement rules applying within one country support national scope labelling.', 'Local service radius confined to one town defines local geographic scope.', 'Globalisation and multinational expansion are presented as connected developments.', 'Regional exporters with substantial foreign sales cross into international scope.', 'Cross-border currency use complicates international pricing and settlement.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic-only tender rules align with national activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Town-limited service fits local classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Pairs globalisation with rising multinationals.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Meaningful export sales beyond the home country affect international classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Currency differences are integral to international trade.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '1/5', 45, 'full' ),
( '3.5', 'CASE 3.5.46', 'Multinational stakeholder spread', 'Analyze stakeholders spread across countries when a firm operates multinationally. Evaluate the following economic assertions:', ARRAY['Regional firms within one province share geographically limited customer pools.', 'International firms encounter multiple economic systems alongside legal differences.', 'National airlines depending on domestic airports operate at national scope.', 'Globalisation means local businesses cease to exist in the home economy.', 'Local scope excludes service businesses because services have no geography.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Provincial operators draw from bounded regional markets.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Economic and legal variation accompanies cross-border operations.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Domestic airport networks reflect national geographic reach.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Local firms continue alongside rising multinationals.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Service firms can operate locally with nearby customers.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '1/5', 46, 'full' ),
( '3.5', 'CASE 3.5.47', 'Local market saturation', 'Analyze a local market becomes saturated when most nearby customers already buy. Evaluate the following economic assertions:', ARRAY['National procurement rules prove international scope because governments are global actors.', 'International supply chains are shorter than local ones due to container shipping.', 'Local market saturation limits growth when nearby demand is largely met.', 'A components manufacturer is classified as national because most staff work in Austria.', 'Regional competitors prove multinational scope because rivalry crosses town boundaries.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Domestic-only tendering within one country remains national scope.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

States international operations lengthen supply chains.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Exhausted proximate demand constrains local expansion.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Cross-border production and sales make a components manufacturer a multinational example.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Regional rivalry within a limited area does not establish international scope.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 47, 'full' ),
( '3.5', 'CASE 3.5.48', 'Regional policy support', 'Analyze regional development grants target firms serving limited areas. Evaluate the following economic assertions:', ARRAY['Multinational operations distribute stakeholders across several countries.', 'Culture differences matter only to consumer brands and not to B2B multinationals.', 'Local cafés are national when they appear on a city-wide delivery app.', 'Undercapitalisation is confined to micro firms with fewer than five employees.', 'Undercapitalisation can hinder regional firms seeking to expand beyond their territory.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Stakeholder geography spreads with cross-border enterprise activity.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Cultural factors apply to international business broadly.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

City-wide delivery may still be local/regional unless sales span the country.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Geographic scope classifies firms by the area in which they operate and serve customers — local/regional, national, or international.

Geographic focus rather than headcount alone links undercapitalisation to local/regional firms.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Capital limits affect geographically bounded firms beyond purely local ones.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 48, 'full' ),
( '3.5', 'CASE 3.5.49', 'National scale advantage', 'Analyze national scale can lengthen the supply chain compared with a local producer. Evaluate the following economic assertions:', ARRAY['International joint ventures are national when the partner is from a neighbouring country.', 'Regional export shares below fifty percent mean the firm remains purely national.', 'National scope excludes firms with foreign shareholders.', 'Globalisation is defined as free internet access in every country.', 'Selling in the home country only, with no foreign production or sales, fits national scope.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Foreign production partnerships indicate international activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone. National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Any meaningful foreign sales contribute to international scope analysis.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Shareholder nationality does not determine geographic operating scope.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Defines globalisation through multinational enterprise growth.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Purely domestic make-and-sell activity aligns with national classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 49, 'full' ),
( '3.5', 'CASE 3.5.50', 'International scope exam synthesis', 'Analyze local, regional, national, and international scope distinctions for exam review. Evaluate the following economic assertions:', ARRAY['International scope brings language management needs for customer-facing staff.', 'Regional development grants targeting limited-area firms reflect regional policy focus.', 'Globalisation describes increasing multinational presence in the world economy.', 'Local/regional scope combines limited operating area with chiefly nearby customers.', 'National scale lengthens supply chains relative to neighbourhood producers.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Language differences matter in cross-border customer contact.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Regional support programmes aim at geographically bounded businesses.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — International or multinational firms make and/or sell in more than one country. That brings longer supply chains and multiple cultures, languages, currencies, and legal systems.

Rising multinationals underpin the course globalisation concept.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Local and regional firms operate in a limited geographic area with customers nearby. Scope is about territory and customer reach, not staff count alone.

Both area and customer proximity define local/regional classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — National scope means operating within the home country rather than across foreign markets. It is wider than a single district but not continental or worldwide by definition.

Country-wide activity extends chains beyond local suppliers.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '1/5', 50, 'full' ),
( '3.6', 'CASE 3.6.01', 'Stakeholder definition breadth', 'Analyze who counts as a stakeholder among parties affected by or interested in the firm. Evaluate the following economic assertions:', ARRAY['Customers who rely on a firm''s products count as stakeholders even without owning shares.', 'Stakeholders are limited to shareholders who hold voting rights in the company.', 'Suppliers and employees are excluded from stakeholder status because they receive payment.', 'Stakeholders include anyone affected by or interested in the business.', 'Only senior managers on the organisation chart qualify as stakeholders.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Customers are affected by and interested in firm performance.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders include anyone affected or interested, not shareholders alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Payment does not remove stakeholder status when parties are affected or interested.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders are defined broadly as affected or interested parties.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Stakeholders include customers, suppliers, communities, and others beyond senior managers.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 1, 'full' ),
( '3.6', 'CASE 3.6.02', 'Owner profit motives', 'Consider a small IT-support venture evaluate what they as bakery owners seek from business performance. Evaluate the following economic assertions:', ARRAY['A small IT-support venture have no interest in how the venture performs once the shop opens.', 'Profit rewards a small IT-support venture for coordinating staff, suppliers, and customer service.', 'Growing the bakery''s reputation may increase the value of their investment over time.', 'They accept business risk because poor trading could reduce their personal return.', 'A small IT-support venture as owners seek profit from daily bread and pastry sales.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Owners remain interested in profit, risk, and value throughout operation.

Against the scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Profit reflects return for entrepreneurial coordination and risk.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Owners may want share or business value to increase.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Owners bear risk and seek reward for doing so.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owners typically seek profit from business performance.

The scenario (a small IT-support venture evaluate what they as bakery owners seek from business performance) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 2, 'full' ),
( '3.6', 'CASE 3.6.03', 'Owner risk reward', 'Analyze owner exposure to risk and reward in enterprise activity. Evaluate the following economic assertions:', ARRAY['Reward for owners is unrelated to how well the business trades.', 'Owners bear financial risk when revenue falls short of costs and may lose invested capital.', 'Owners share gains with staff but face no downside when sales decline sharply.', 'Risk and reward apply only to employees, not to people who provide capital.', 'Owners receive profit without risk because limited liability guarantees positive returns.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owner returns depend on business performance and profitability.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Risk bearing is central to the owner stakeholder position.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Owners can lose value and returns when trading performance is poor.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Owners face risk and seek reward for capital invested.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Limited liability limits personal loss but does not remove owner risk entirely.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 3, 'full' ),
( '3.6', 'CASE 3.6.04', 'Manager income security', 'Analyze managers weigh income and security when judging business decisions. Evaluate the following economic assertions:', ARRAY['Restructuring decisions that threaten jobs show managers are affected as stakeholders.', 'Job security matters to managers because firm failure could end their employment.', 'Managers seek stable income from the employing firm as a core stakeholder interest.', 'Managers depend on continued firm success for promotion and salary prospects.', 'Managers are stakeholders because business outcomes affect their careers and pay.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers are stakeholders because firm outcomes affect their careers and income.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Security of employment is part of manager stakeholder interests.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Income is listed among manager stakeholder concerns.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Manager livelihoods tie to firm performance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers are included among business stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 4, 'full' ),
( '3.6', 'CASE 3.6.05', 'Employee identification', 'Consider bakery staff may identify with a small IT-support venture''s business success. Evaluate the following economic assertions:', ARRAY['Staff depend on the bakery''s continued operation for wages and job security.', 'Employees are not stakeholders because they do not invest capital in the bakery.', 'Job security is a legitimate employee stakeholder interest alongside monthly wages.', 'Employees may identify with the bakery and feel pride when it succeeds locally.', 'Employees lose stakeholder status once they receive their monthly wage payment.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees depend on firm success for livelihood.

In the case setting — bakery staff may identify with a small IT-support venture''s business success — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees are stakeholders even without share ownership.

In the case setting — bakery staff may identify with a small IT-support venture''s business success — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Security of employment sits alongside income for employees.

The scenario (bakery staff may identify with a small IT-support venture''s business success) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Identification with firm success is an employee stakeholder theme.

In the case setting — bakery staff may identify with a small IT-support venture''s business success — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Job security and identification tie employees to ongoing firm outcomes.

Against the scenario (bakery staff may identify with a small IT-support venture''s business success), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 5, 'full' ),
( '3.6', 'CASE 3.6.06', 'Mutual dependence staff', 'Analyze mutual dependence between managers, employees, and the employing firm. Evaluate the following economic assertions:', ARRAY['Managers and employees are mutually dependent on the business with the owners'' venture.', 'The firm can operate indefinitely without managers or employees contributing labour.', 'Staff livelihoods are unaffected when the employing firm stops trading.', 'Mutual dependence applies only between customers and suppliers, not between staff and the firm.', 'Owners alone create output; staff dependence on the firm is a one-way relationship.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Mutual dependence links managers, employees, and the firm.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

The business depends on staff to operate and generate revenue.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Closure harms staff jobs and income tied to the firm.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers and employees are mutually dependent on the business.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Both staff and the firm need each other for ongoing success.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 6, 'full' ),
( '3.6', 'CASE 3.6.07', 'Shared values culture', 'Analyze shared values as a link between staff and organisational success. Evaluate the following economic assertions:', ARRAY['When personal values align with company practices, staff engagement often improves.', 'Shared values guarantee identical opinions on every management decision.', 'Employment contracts alone make shared values irrelevant to stakeholder relations.', 'Shared values can strengthen cooperation between employees and management on firm goals.', 'Shared values between staff and the organisation can support business success.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Alignment of values supports cooperation on business goals.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Shared values support alignment but conflicts can still arise among stakeholders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Shared values between staff and organisation matter in stakeholder analysis.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Shared values support mutual dependence and identification themes.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Shared values link employees with organisational performance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 7, 'full' ),
( '3.6', 'CASE 3.6.08', 'Supplier payment expectations', 'Analyze suppliers expect payment and future orders. Evaluate the following economic assertions:', ARRAY['Suppliers expect to be paid for goods delivered to the buying business.', 'Stakeholder analysis includes suppliers expecting both payment and continued commercial relationship.', 'Suppliers are stakeholders because firm decisions affect their cash flow and volumes.', 'Fair payment terms reflect supplier stakeholder interests, not only accounting detail.', 'Suppliers rely on future orders, not only payment for past deliveries.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Payment is a core supplier stakeholder interest.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Supplier interests combine cash flow and order volume.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers are stakeholders through payment and order dependency.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Payment and order treatment reflect supplier stakeholder interests.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Future orders matter to suppliers as ongoing stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 8, 'full' ),
( '3.6', 'CASE 3.6.09', 'Supplier quality delivery', 'Analyze suppliers depend on quality expectations and timely delivery from their own operations. Evaluate the following economic assertions:', ARRAY['Late or defective shipments are solely the buyer''s problem, not the supplier''s concern.', 'Suppliers need not worry about timeliness because buyers hold all delivery risk.', 'Timely delivery is part of the supplier''s stakeholder duty toward the buying firm.', 'Suppliers must deliver quality goods on time to satisfy the buying business.', 'Quality standards apply only to the buyer''s internal staff, not to external suppliers.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Supplier performance affects the buyer''s ability to serve customers.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Timely delivery is a supplier responsibility in the mutual dependency chain.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers must deliver quality and timeliness to fulfil their role.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Quality and timely delivery are supplier responsibilities.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Suppliers must meet quality and delivery expectations toward customers.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 9, 'full' ),
( '3.6', 'CASE 3.6.10', 'Customer mutual dependency', 'Consider neighbourhood bakery customers who depend on the shop for fresh bread. Evaluate the following economic assertions:', ARRAY['Mutual dependency means both parties need each other for continued benefit.', 'Customers depend on firms but firms do not depend on customers for revenue.', 'Customers depend on the bakery for product quality and daily availability.', 'The bakery depends on customers for revenue that keeps the shop trading.', 'If the bakery closes, regular customers lose a relied-upon source of fresh bread.'], ARRAY[true, false, true, true, true], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency runs between customers and firms.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency means firms rely on customers for revenue.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers rely on firms for products and services.

The scenario (neighbourhood bakery customers who depend on the shop for fresh bread) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Firms depend on customers for sales and revenue.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customer welfare ties to firm performance through mutual dependency.

In the case setting — neighbourhood bakery customers who depend on the shop for fresh bread — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 10, 'full' ),
( '3.6', 'CASE 3.6.11', 'Community interest', 'Analyze local communities can be affected by nearby business activity. Evaluate the following economic assertions:', ARRAY['Residents may care about noise, pollution, and employment created by a nearby firm.', 'Communities near a plant can be stakeholders affected by jobs, traffic, and local spending.', 'Community opposition to expansion can signal conflicting stakeholder interests.', 'A town relying on one major employer shows community stake in that firm''s survival.', 'Communities cannot be stakeholders because they do not sign contracts with the firm.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local amenities and jobs link communities to business outcomes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Community and owner interests may conflict on expansion impacts.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local employment ties community interests to firm outcomes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 11, 'full' ),
( '3.6', 'CASE 3.6.12', 'Government interest', 'Analyze governments take an interest in business activity within their jurisdiction. Evaluate the following economic assertions:', ARRAY['Government stakeholder interest disappears wherever markets operate without formal rules.', 'Government is a stakeholder only when it owns shares in nationalised industries.', 'Regulators represent broader public interest when setting business rules.', 'Government has no stake in local tax-paying businesses because it only collects fixed fees.', 'Government has an interest in business activity through tax, regulation, and public policy.'], ARRAY[false, false, true, false, true], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Tax and policy interests remain even where regulation is light.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government interest arises from regulation, tax, and public policy broadly.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Government protects public interest through regulation.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Tax collection links government interests to business trading performance.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Government is a stakeholder via tax, regulation, and policy.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 12, 'full' ),
( '3.6', 'CASE 3.6.13', 'Environment real action', 'Analyze environmental stakeholders'' expectation of genuine action rather than superficial claims. Evaluate the following economic assertions:', ARRAY['Superficial eco-labels without operational change fully meet environmental stakeholder expectations.', 'Real environmental action is less important than using the word sustainable in advertising.', 'Environmental action requires only a logo change without process improvement.', 'Environmental stakeholders expect real action rather than superficial green marketing alone.', 'Environmental stakeholders are satisfied by marketing slogans without operational change.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Real action, not slogans, is required on environmental issues.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Genuine action is prioritised over superficial claims.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Real operational action is expected, not cosmetic logo changes alone.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine environmental action is expected, not slogans alone.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine action is required, not greenwash slogans alone.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 13, 'full' ),
( '3.6', 'CASE 3.6.14', 'Greenwash warning', 'Analyze greenwash as a stakeholder relations risk. Evaluate the following economic assertions:', ARRAY['Greenwash misleads stakeholders by exaggerating environmental performance.', 'Greenwash strengthens long-term stakeholder trust more than honest reporting.', 'Greenwash means exceeding environmental standards while understating achievements.', 'Advertising recyclable packaging while increasing pollution illustrates greenwash risk.', 'Empty eco-slogans without process change can erode stakeholder trust over time.'], ARRAY[true, false, false, true, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Greenwash means exaggerated claims without real action.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Greenwash misleads stakeholders and undermines trust when uncovered.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Greenwash exaggerates performance rather than understating genuine achievement.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Misleading green claims without real action exemplify greenwash.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Misleading claims undermine long-term stakeholder trust.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '1/5', 14, 'full' ),
( '3.6', 'CASE 3.6.15', 'Environmental reporting', 'Analyze environmental reporting is discussed as a business responsibility. Evaluate the following economic assertions:', ARRAY['Disclosing environmental impacts helps stakeholders assess whether firms take genuine action.', 'Environmental reporting communicates firm impacts to interested stakeholders.', 'Sustainability reports can inform communities and investors about environmental impacts.', 'Environmental reporting without operational improvement may still mislead stakeholders.', 'The natural environment is treated as a stakeholder expecting substantive corporate response.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting supports stakeholder evaluation of real environmental performance.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting addresses environmental stakeholder information needs.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Environmental reporting serves stakeholder information needs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting must reflect real action to remain credible.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Environment is a stakeholder expecting action and reporting.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '1/5', 15, 'full' ),
( '3.6', 'CASE 3.6.16', 'Conflicting interests', 'Analyze conflicting stakeholder interests arise in many decisions. Evaluate the following economic assertions:', ARRAY['Environmental spending may reduce short-term profit, creating owner-environment tension.', 'Profit maximisation plans may conflict with community noise or pollution concerns.', 'Different stakeholder groups can have conflicting interests in the same decision.', 'All stakeholder groups want the same outcome on every business decision.', 'Stakeholder conflict is rare and only occurs between owners and customers.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owner profit aims can clash with environmental demands.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Profit and community welfare can conflict.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Conflicting stakeholder interests arise in many decisions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Conflicting interests among stakeholders are common.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Conflicts can arise among many stakeholder groups.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 16, 'full' ),
( '3.6', 'CASE 3.6.17', 'Legal structure factor', 'Analyze legal structure is listed among other success factors. Evaluate the following economic assertions:', ARRAY['Legal and financial structure can influence how successfully a business meets stakeholder needs.', 'Choosing a partnership rather than a company can change how owner risk is shared.', 'Legal structure is listed among factors that can affect overall business success.', 'A company''s legal form can determine reporting duties toward different stakeholder groups.', 'Legal form can shape duties owed to different stakeholder groups.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal and financial structure are success factors affecting stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Legal form affects how risk and duties are distributed among stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Legal structure appears among contextual success factors.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal structure shapes how firms communicate with stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal structure shapes duties to stakeholder groups.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 17, 'full' ),
( '3.6', 'CASE 3.6.18', 'Financial structure factor', 'Analyze financial structure appears among factors affecting business success. Evaluate the following economic assertions:', ARRAY['Financial structure choices can affect how risk is shared among owner stakeholders.', 'Financial structure matters only to accountants, not to owner or creditor stakeholders.', 'Borrowing decisions have no effect on which stakeholder groups bear business risk.', 'Equity and debt mix is unrelated to how stakeholder returns are funded.', 'Financial structure matters to creditors and owners as well as to accountants.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Financial structure influences risk sharing among owners.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Financial structure influences risk sharing and success for stakeholders.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Financial structure choices affect how risk is shared among stakeholders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Financial structure shapes risk and returns for stakeholder groups.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Financial structure influences outcomes for owners and creditors.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 18, 'full' ),
( '3.6', 'CASE 3.6.19', 'Market awareness factor', 'Consider a small IT-support venture assess how market awareness affects their bakery stakeholders. Evaluate the following economic assertions:', ARRAY['Ignoring local taste trends could harm a small IT-support venture''s customers and their own returns.', 'Tracking customer preferences helps the bakery retain mutual dependency with its buyers.', 'Market awareness helps a firm respond to customer and competitive stakeholder pressures.', 'Market awareness concerns only rivals and has no bearing on customer stakeholders.', 'Understanding rival bakeries helps a small IT-support venture keep quality attractive to regular buyers.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Market awareness affects ability to serve customer and owner interests.

The scenario (a small IT-support venture assess how market awareness affects their bakery stakeholders) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Responding to customers strengthens mutual dependency.

In the case setting — a small IT-support venture assess how market awareness affects their bakery stakeholders — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Market awareness supports meeting customer and competitive pressures.

In the case setting — a small IT-support venture assess how market awareness affects their bakery stakeholders — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Market awareness helps meet customer and competitive pressures.

Against the scenario (a small IT-support venture assess how market awareness affects their bakery stakeholders), the claim attaches the wrong label.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Market awareness supports serving customer stakeholder needs.

In the case setting — a small IT-support venture assess how market awareness affects their bakery stakeholders — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 19, 'full' ),
( '3.6', 'CASE 3.6.20', 'Cost profitability factor', 'Analyze costs and profitability influence stakeholder outcomes. Evaluate the following economic assertions:', ARRAY['Managing costs and profitability affects what returns owners and jobs employees can sustain.', 'Costs and profitability affect only owners and have no bearing on jobs or supplier orders.', 'Cutting costs on ingredients has no effect on customer stakeholder satisfaction.', 'Employee job security is unaffected by whether the firm remains profitable.', 'Profitability levels are irrelevant to whether suppliers receive future orders.'], ARRAY[true, false, false, false, false], ARRAY['TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Costs and profitability connect to owner and employee outcomes.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Profitability underpins wages, orders, and returns for multiple groups.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Cost decisions can affect quality and therefore customer stakeholders.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Profitability underpins employment sustainability for staff.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Profitability affects ability to pay suppliers and place orders.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 20, 'full' ),
( '3.6', 'CASE 3.6.21', 'Owners share value', 'Analyze owners may seek increases in share or business value. Evaluate the following economic assertions:', ARRAY['Reinvesting profit rather than paying it out may aim to build long-term business value.', 'Owners bear losses when trading performance is poor, linking risk to reward.', 'Rising business value can reward owners for successful risk bearing over time.', 'Owners may want the value of shares or the business to increase.', 'Building a stronger brand can contribute to higher business valuation for owners.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Reinvestment choices shape owner value interests.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Risk bearing is central to the owner stakeholder position.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Value growth links to owner risk and reward.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Share or business value growth is a recognised owner interest.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Brand strength supports owner interest in rising business value.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 21, 'full' ),
( '3.6', 'CASE 3.6.22', 'Managers not stakeholders trap', 'Analyze a student claims only shareholders are stakeholders. Evaluate the following economic assertions:', ARRAY['Managers are not stakeholders because they are paid to execute orders without personal interest.', 'Customers are stakeholders only when they sit on the board of directors.', 'Only shareholders count as stakeholders in a listed company.', 'Stakeholders are only people who own shares; customers and employees are excluded.', 'Stakeholders include anyone affected by or interested in the business, not shareholders alone.'], ARRAY[false, false, false, false, true], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers seek income and security and are listed as stakeholders.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Customers are stakeholders through mutual dependency without board seats.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders include all affected or interested parties, not shareholders alone.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Stakeholders include anyone affected or interested, not owners alone.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

The stakeholder definition is broader than share ownership.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 22, 'full' ),
( '3.6', 'CASE 3.6.23', 'Employees job security', 'Analyze employees seek job security alongside income. Evaluate the following economic assertions:', ARRAY['Job security concerns apply only to managers, not to ordinary employees.', 'Job security is a legitimate employee stakeholder interest alongside wages.', 'Staff depend on the firm''s continued operation for wages and job security.', 'Employees are stakeholders even if they do not own shares in the company.', 'Employees and managers share dependence on continued profitable operation for livelihoods.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees generally seek security alongside income.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Security of employment sits alongside income for employees.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees depend on firm success for livelihood.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Stakeholder status does not require ownership.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Staff livelihoods depend on firm performance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 23, 'full' ),
( '3.6', 'CASE 3.6.24', 'Suppliers timely orders', 'Consider suppliers need predictable orders as well as payment. Evaluate the following economic assertions:', ARRAY['Suppliers rely on predictable orders, not only on being paid for past deliveries.', 'Predictable order volumes are irrelevant to suppliers who already received payment.', 'Delayed or cancelled orders can threaten a supplier''s ability to retain staff and pay bills.', 'A supplier''s stakeholder interest ends once a single invoice is settled.', 'Suppliers care about payment but not about future order volumes.'], ARRAY[true, false, true, false, false], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Future orders matter to suppliers as ongoing stakeholders.

In the case setting — suppliers need predictable orders as well as payment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Future orders matter to suppliers as ongoing stakeholders.

Against the scenario (suppliers need predictable orders as well as payment), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Order volumes affect supplier livelihoods as stakeholders.

In the case setting — suppliers need predictable orders as well as payment — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers remain stakeholders through ongoing orders and payment.

Against the scenario (suppliers need predictable orders as well as payment), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Orders and payment together define supplier stakeholder interests.

In the case setting — suppliers need predictable orders as well as payment — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 24, 'full' ),
( '3.6', 'CASE 3.6.25', 'Customers quality price', 'Analyze how a bakery''s regular buyers depend on consistent quality and fair pricing. Evaluate the following economic assertions:', ARRAY['Customers suffer if a relied-upon provider fails to supply quality products on time.', 'Fair pricing and reliable quality keep a bakery''s regular buyers returning to the bakery.', 'Quality and price matter only to owners, not to customer stakeholders.', 'Customers depend on firms for product quality and availability.', 'Buyers at a neighbourhood bakery have no stake in whether the shop stays open.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customer welfare ties to firm performance through mutual dependency.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers depend on firms for product quality and fair pricing.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Customers depend on firms for product quality and availability.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers rely on firms for products and services.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers depend on the bakery through mutual dependency.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 25, 'full' ),
( '3.6', 'CASE 3.6.26', 'Community local impact', 'Analyze communities near a plant care about jobs, noise, and local spending. Evaluate the following economic assertions:', ARRAY['Local communities can be stakeholders affected by jobs, traffic, and spending from nearby firms.', 'Facility expansion cannot create stakeholder conflict because communities do not trade with the firm.', 'Community jobs concerns are not stakeholder issues because employment is private.', 'Residents near an industrial plant may care about noise, pollution, and local jobs created by the firm.', 'Communities near a plant have no interest in how the firm performs commercially.'], ARRAY[true, false, false, true, false], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are stakeholders even without direct commercial contracts.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by local employment and are stakeholders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local amenities and jobs link communities to business outcomes.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local spending and jobs link community interests to firm activity.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 26, 'full' ),
( '3.6', 'CASE 3.6.27', 'Government tax compliance', 'Analyze governments collect tax and enforce rules affecting firms. Evaluate the following economic assertions:', ARRAY['Government stakeholder interest disappears in free markets with no regulation.', 'For tax compliance purposes, government has no stake in local firms because it only collects fixed fees.', 'Enforcement of business rules shows government acting as a stakeholder in firm conduct.', 'Compliance inspections link government oversight to how firms treat wider stakeholder interests.', 'Tax collection gives government a stake in the trading performance of local firms.'], ARRAY[false, false, true, true, true], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Tax and policy interests remain even where regulation is light.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Tax collection links government interests to business trading performance.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government is a stakeholder via regulation and policy.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government protects public interest through regulation and tax.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Fiscal policy links government interests to business activity.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 27, 'full' ),
( '3.6', 'CASE 3.6.28', 'Environment beyond slogan', 'Consider whether environmental concerns require substantive measures, not slogans alone. Evaluate the following economic assertions:', ARRAY['Eco-slogans alone can satisfy environmental stakeholders without any change to production processes.', 'Cosmetic eco-labels on packaging fully meet environmental stakeholder expectations without operational change.', 'Beyond slogans, environmental stakeholders still expect substantive measures rather than marketing alone.', 'Cosmetic branding changes satisfy environmental stakeholders without process improvement.', 'Using the word sustainable in advertising matters more than real environmental action on the shop floor.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine action is required, not greenwash slogans alone.

Against the scenario (whether environmental concerns require substantive measures, not slogans alone), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Real action, not slogans, is required on environmental issues.

In the case setting — whether environmental concerns require substantive measures, not slogans alone — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine environmental action is expected, not slogans alone.

The scenario (whether environmental concerns require substantive measures, not slogans alone) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Real operational action is expected, not cosmetic changes alone.

In the case setting — whether environmental concerns require substantive measures, not slogans alone — the sentence mislabels the category or overreaches.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Genuine action is prioritised over superficial claims.

Against the scenario (whether environmental concerns require substantive measures, not slogans alone), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 28, 'full' ),
( '3.6', 'CASE 3.6.29', 'Stakeholders not shareholders only', 'Analyze breadth of stakeholder concept beyond owners alone. Evaluate the following economic assertions:', ARRAY['Employees count as stakeholders through wages and job security even without owning shares.', 'Suppliers are stakeholders because payment and order decisions affect their operations.', 'Communities affected by traffic and jobs from a nearby plant count as stakeholders.', 'Stakeholders include anyone affected by or interested in the business, extending beyond shareholders.', 'Customers who depend on a firm''s products are stakeholders through mutual dependency.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Stakeholder status does not require ownership.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers are stakeholders through payment and order dependency.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders are defined broadly as affected or interested parties.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Customers are affected by and interested in firm performance.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 29, 'full' ),
( '3.6', 'CASE 3.6.30', 'Owner risk bearing', 'Analyze owners bear financial risk if the venture performs poorly. Evaluate the following economic assertions:', ARRAY['Poor trading performance can reduce owner returns and the value of capital they invested.', 'Rising share or business value rewards owners who accepted earlier business risk.', 'Owners receive reward without risk because businesses guarantee profits.', 'Owners typically seek profit and a return for bearing business risk.', 'Owners accept that poor results can reduce the value of their invested capital.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Risk bearing is central to the owner stakeholder position.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Share or business value growth is a recognised owner interest.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owners face risk when performance is poor despite seeking profit.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owners want profit and reward for risk.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Risk bearing includes potential loss of capital when performance is weak.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 30, 'full' ),
( '3.6', 'CASE 3.6.31', 'Manager employee dependence', 'Consider managers and employees rely on firm performance for livelihood. Evaluate the following economic assertions:', ARRAY['Managers can ignore firm health because their salaries are fixed regardless of results.', 'Staff wages continue unchanged even when the employing firm stops trading permanently.', 'Managers and employees both rely on the firm''s continued operation for income and jobs.', 'Employees need the firm for wages but the firm does not need employees to operate.', 'Mutual dependence between staff and firm is limited to customer-supplier links in the market.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Income and job security tie managers to firm performance.

Against the scenario (managers and employees rely on firm performance for livelihood), the claim attaches the wrong label.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Closure harms staff jobs and income tied to the firm.

Against the scenario (managers and employees rely on firm performance for livelihood), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Mutual dependence links managers, employees, and the firm.

In the case setting — managers and employees rely on firm performance for livelihood — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

The business depends on staff to operate and generate revenue.

In the case setting — managers and employees rely on firm performance for livelihood — the sentence mislabels the category or overreaches.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Managers and employees are mutually dependent on the business.

Against the scenario (managers and employees rely on firm performance for livelihood), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 31, 'full' ),
( '3.6', 'CASE 3.6.32', 'Supplier buyer relationship', 'Analyze how a bakery''s flour supplier relies on their bakery for orders and payment. Evaluate the following economic assertions:', ARRAY['Only the bakery owners are stakeholders in the flour supply arrangement.', 'The flour supplier expects payment and future orders from a neighbourhood bakery.', 'The bakery depends on the supplier for quality flour while the supplier depends on bakery orders.', 'Delayed bakery orders threaten the flour supplier''s cash flow and staffing plans.', 'Buyers and suppliers rely on each other for orders and cash flow.'], ARRAY[false, true, true, true, true], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Suppliers are stakeholders through payment and order dependency.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Suppliers expect payment and orders without needing ownership.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency runs both ways between buyers and suppliers.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Order volumes affect supplier livelihoods as stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Supplier cash flow depends on steady bakery orders from buyers.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 32, 'full' ),
( '3.6', 'CASE 3.6.33', 'Customer firm reliance', 'Analyze customers lose access if a relied-upon supplier closes. Evaluate the following economic assertions:', ARRAY['Firms depend on customers for revenue but customers depend on no particular supplier.', 'Closing a relied-upon supplier affects customers, but they have no stakeholder link to that firm.', 'Suppliers need customers but customers do not rely on suppliers for availability.', 'Customers lose access if a relied-upon supplier closes.', 'Buyers need reliable suppliers just as suppliers need paying customers.'], ARRAY[false, false, false, true, true], ARRAY['FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers rely on specific firms for product quality and availability.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Customer welfare ties to firm performance through mutual dependency.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency means customers rely on suppliers too.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customer welfare ties to firm performance through mutual dependency.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency runs both ways between customers and firms.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 33, 'full' ),
( '3.6', 'CASE 3.6.34', 'Community facility impact', 'Analyze a new warehouse affects traffic and jobs in a town. Evaluate the following economic assertions:', ARRAY['Communities affected by noise from a new plant hold stakeholder interests in how the firm operates.', 'Local employment linked to a warehouse gives the community a stake in the firm''s continued operation.', 'A new warehouse affects traffic and jobs in a town, creating community stakeholder interests.', 'Community opposition to a new warehouse signals conflicting interests with the developer.', 'Residents near a new facility may experience stakeholder effects from increased lorry movements.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local employment ties community interests to firm outcomes.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by facility impacts and local employment.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Community and owner interests may conflict on expansion impacts.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Traffic impacts create community stakeholder interests.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 34, 'full' ),
( '3.6', 'CASE 3.6.35', 'Government regulation aim', 'Analyze regulators set standards protecting public interest in business conduct. Evaluate the following economic assertions:', ARRAY['Regulation aims to balance business activity with protection of wider stakeholder interests.', 'Business rules set by regulators reflect protection of the wider public interest.', 'Regulators have no stakeholder role because businesses operate independently of public policy.', 'Environmental rules reflect government acting as a stakeholder for the wider community.', 'Government builds roads solely for private amusement unrelated to business logistics.'], ARRAY[true, true, false, true, false], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government stakeholder role includes protecting public interest via regulation.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Government protects public interest through regulation.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government is a stakeholder via tax, regulation, and policy.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Regulation can represent environmental and community stakeholder concerns.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Infrastructure links to economic activity affecting business and public stakeholders.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '2/5', 35, 'full' ),
( '3.6', 'CASE 3.6.36', 'Sustainability reporting duty', 'Analyze investors and communities may demand sustainability reporting. Evaluate the following economic assertions:', ARRAY['Published sustainability data can inform investors and communities about environmental impacts.', 'Communities may rely on published environmental data when assessing local facility impacts.', 'Investors may use sustainability disclosures to judge whether environmental claims are credible.', 'Green marketing labels replace the need for environmental reporting.', 'Sustainability reporting is meant to hide impacts from community stakeholders.'], ARRAY[true, true, true, false, false], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Environmental reporting serves stakeholder information needs.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Reporting addresses community stakeholder information needs.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Reporting supports stakeholder evaluation of environmental performance.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Reporting remains part of environmental stakeholder expectations.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting informs stakeholders rather than concealing impacts by design.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
'], '1/5', 36, 'full' ),
( '3.6', 'CASE 3.6.37', 'Profit versus environment conflict', 'Consider higher profit targets may clash with environmental spending. Evaluate the following economic assertions:', ARRAY['Higher profit targets may clash with environmental spending on cleaner production.', 'Profit and environmental protection align perfectly with no trade-offs in every decision.', 'Owners and environmental stakeholders agree on every spending priority without exception.', 'Pollution control investments raise costs but create no tension with owner stakeholder interests.', 'Cleaner production spending can lower short-term profit and tension owner and environmental aims.'], ARRAY[true, false, false, false, true], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Profit and environmental goals can conflict in the same decision.

The scenario (higher profit targets may clash with environmental spending) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Conflicting stakeholder interests include environmental tensions.

Against the scenario (higher profit targets may clash with environmental spending), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Conflicting interests among stakeholders are common.

Against the scenario (higher profit targets may clash with environmental spending), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owner profit aims can clash with environmental demands.

Against the scenario (higher profit targets may clash with environmental spending), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owner profit aims can clash with environmental demands.

In the case setting — higher profit targets may clash with environmental spending — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 37, 'full' ),
( '3.6', 'CASE 3.6.38', 'Growth versus community conflict', 'Analyze a small IT-support venture plan a larger bakery extension opposed by neighbours. Evaluate the following economic assertions:', ARRAY['Expansion plans may clash with community preferences about noise and traffic.', 'Community objections to a bakery extension illustrate conflicting stakeholder interests in practice.', 'A small IT-support venture''s growth ambitions may conflict with neighbours'' wish to limit delivery traffic.', 'Profit from a larger bakery and community concerns about noise can pull owners and neighbours in different directions.', 'Neighbours opposing a small IT-support venture''s extension show conflicting stakeholder interests over local amenities.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Community and owner interests may conflict on expansion impacts.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Conflicting stakeholder interests arise when growth affects local amenities.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Neighbour objections to a bakery extension illustrate owner-community tension.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Profit and community concerns can conflict in expansion decisions.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Local amenity concerns can pull neighbours and owners in different directions.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 38, 'full' ),
( '3.6', 'CASE 3.6.39', 'Stakeholder synthesis', 'Analyze stakeholder theory and success factors for exam review. Evaluate the following economic assertions:', ARRAY['Mutual dependence exists only between customers and suppliers, not among staff and the firm.', 'Exam review: stakeholders include anyone affected by or interested in the business.', 'Stakeholder analysis applies only to shareholders because they provide capital.', 'Greenwash satisfies environmental stakeholders if marketing slogans are persuasive enough.', 'Conflicting stakeholder interests do not arise when success factors are managed well.'], ARRAY[false, true, false, false, false], ARRAY['FALSE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Mutual dependence links managers, employees, customers, suppliers, and the firm.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders are defined broadly as affected or interested parties.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders include anyone affected or interested, not shareholders alone.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine environmental action is expected, not greenwash slogans alone.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Conflicting stakeholder interests arise in many decisions.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 39, 'full' ),
( '3.6', 'CASE 3.6.40', 'Bakery stakeholder groups', 'Consider a neighbourhood bakery, which affects owners, staff, suppliers, and neighbours. Evaluate the following economic assertions:', ARRAY['Bakery staff depend on the shop for wages and job security as employee stakeholders.', 'Bakery owners seek profit and bear risk from how the shop trades.', 'The owners, staff, flour suppliers, and neighbours all hold stakeholder interests in the bakery.', 'Only a small IT-support venture count as stakeholders because they provided the original capital.', 'The flour supplier expects payment and future orders as a supplier stakeholder.'], ARRAY[true, true, true, false, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees depend on firm success for livelihood.

The scenario (a neighbourhood bakery, which affects owners, staff, suppliers, and neighbours) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owners typically seek profit and bear business risk.

In the case setting — a neighbourhood bakery, which affects owners, staff, suppliers, and neighbours — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Multiple groups affected by the bakery fit the stakeholder definition.

In the case setting — a neighbourhood bakery, which affects owners, staff, suppliers, and neighbours — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders include staff, suppliers, customers, and neighbours too.

Against the scenario (a neighbourhood bakery, which affects owners, staff, suppliers, and neighbours), the claim attaches the wrong label.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Suppliers expect payment and orders without needing ownership.

The scenario (a neighbourhood bakery, which affects owners, staff, suppliers, and neighbours) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 40, 'full' ),
( '3.6', 'CASE 3.6.41', 'Multinational stakeholder spread', 'Consider a components manufacturer that affects owners, employees, suppliers, communities, and regulators in many countries. Evaluate the following economic assertions:', ARRAY['Employees at a components manufacturer''s plants are stakeholders affected by corporate decisions.', 'Government regulators in host countries hold stakeholder interests in a components manufacturer''s operations.', 'Communities near a components manufacturer''s facilities may be stakeholders affected by jobs and local spending.', 'A components manufacturer affects employees, suppliers, communities, and regulators across its operating countries.', 'A multinational like a components manufacturer has stakeholders only among its shareholders.'], ARRAY[true, true, true, true, false], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Employees are stakeholders through income, security, and identification.

In the case setting — a components manufacturer that affects owners, employees, suppliers, communities, and regulators in many countries — that reading fits the facts given.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government is a stakeholder via regulation, tax, and policy.

The scenario (a components manufacturer that affects owners, employees, suppliers, communities, and regulators in many countries) supports that classification.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

In the case setting — a components manufacturer that affects owners, employees, suppliers, communities, and regulators in many countries — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Large multinationals have broad stakeholder groups.

In the case setting — a components manufacturer that affects owners, employees, suppliers, communities, and regulators in many countries — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Stakeholders include employees, suppliers, communities, and regulators too.

In the case setting — a components manufacturer that affects owners, employees, suppliers, communities, and regulators in many countries — the sentence mislabels the category or overreaches.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
'], '2/5', 41, 'full' ),
( '3.6', 'CASE 3.6.42', 'Greenwash marketing trap', 'Consider a firm that advertises eco-friendly packaging while increasing pollution. Evaluate the following economic assertions:', ARRAY['Honest green reporting builds less stakeholder trust than bold unsupported eco-claims.', 'Superficial eco-labels without operational change fail environmental stakeholder expectations.', 'Green packaging claims satisfy environmental stakeholders even when pollution rises.', 'Greenwash misleads stakeholders by exaggerating environmental performance in advertising.', 'Advertising recyclable boxes while dumping waste illegally illustrates greenwash risk.'], ARRAY[false, true, false, true, true], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Greenwash misleads stakeholders and undermines trust when uncovered.

In the case setting — a firm that advertises eco-friendly packaging while increasing pollution — the sentence mislabels the category or overreaches.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Real action, not slogans, is required on environmental issues.

The scenario (a firm that advertises eco-friendly packaging while increasing pollution) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Genuine action is required, not greenwash slogans alone.

Against the scenario (a firm that advertises eco-friendly packaging while increasing pollution), the claim attaches the wrong label.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Greenwash means exaggerated claims without real action.

The scenario (a firm that advertises eco-friendly packaging while increasing pollution) supports that classification.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Misleading green claims without real action exemplify greenwash.

In the case setting — a firm that advertises eco-friendly packaging while increasing pollution — that reading fits the facts given.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '1/5', 42, 'full' ),
( '3.6', 'CASE 3.6.43', 'Supplier contract fairness', 'Analyze suppliers argue for fair payment terms when the buyer delays invoices. Evaluate the following economic assertions:', ARRAY['Supplier cash flow concerns are unrelated to stakeholder analysis of payment fairness.', 'Delayed invoices affect only the buyer''s finance department, not supplier stakeholders.', 'Fair payment terms matter to suppliers as stakeholder treatment, not only to accountants.', 'Suppliers have no stakeholder interest in payment timing once a contract is signed.', 'Fair supplier terms are purely legal technicalities, not stakeholder fairness concerns.'], ARRAY[false, false, true, false, false], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Cash-flow pressure from delayed payment affects suppliers as stakeholders.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Payment timing affects supplier stakeholders directly.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Fair payment terms reflect how the buyer treats supplier stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Timely payment is a core supplier stakeholder interest.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Supplier fairness concerns extend beyond narrow legal formalities.

Once the defining feature is restored, the assertion falls away.

The statement is false.
'], '2/5', 43, 'full' ),
( '3.6', 'CASE 3.6.44', 'Employee shared values', 'Analyze staff engagement rises when personal values align with company practices. Evaluate the following economic assertions:', ARRAY['Staff engagement improves when employees feel company practices match their personal values.', 'Shared values between staff and the organisation can support overall business success.', 'Alignment of personal and company values can improve cooperation on business objectives.', 'Staff who share organisational values may identify more closely with firm success.', 'Aligned values help employees and managers cooperate on shared business objectives.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Alignment of values supports cooperation on business goals.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Shared values link employees with organisational performance.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Value alignment can improve day-to-day cooperation at work.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Identification with firm success is an employee stakeholder theme.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Shared values support mutual dependence and identification themes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
'], '2/5', 44, 'full' ),
( '3.6', 'CASE 3.6.45', 'Owner long term value', 'Analyze owners weighing reinvestment versus dividends affect long-term value. Evaluate the following economic assertions:', ARRAY['Owners have no interest in long-term business value, only in immediate cash extraction.', 'Long-term value growth is unrelated to owner stakeholder concerns about risk and reward.', 'Weighing dividends against reinvestment affects the long-term value owners seek.', 'Retaining profit in the business rather than paying dividends can build long-term owner value.', 'Reinvestment decisions affect only accountants, not owner stakeholder interests.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Owners may want share or business value to increase.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Value growth links to owner risk and reward.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Reinvestment versus payout shapes owner value interests.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Reinvestment choices shape owner value interests.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Owners seek profit as reward for organising the venture and bear financial risk when revenue falls short of costs. Risk and reward are linked for providers of capital.

Reinvestment choices shape owner value interests.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
'], '2/5', 45, 'full' ),
( '3.6', 'CASE 3.6.46', 'Customer boycott power', 'Consider customers may switch suppliers if quality falls. Evaluate the following economic assertions:', ARRAY['Customers cannot influence firms because switching suppliers is impossible in all markets.', 'Falling quality gives customers power to switch suppliers and reduce firm revenue.', 'Customers may switch if quality falls, exercising stakeholder influence on revenue.', 'Customer boycotts after poor service show stakeholder power over firm revenue.', 'Buyers at a bakery have no power because they purchase small quantities each visit.'], ARRAY[false, false, true, true, false], ARRAY['FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Mutual dependency gives customers influence when they can switch.

Against the scenario (customers may switch suppliers if quality falls), the claim attaches the wrong label.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Customers depend on firms for product quality and availability.

Against the scenario (customers may switch suppliers if quality falls), the claim attaches the wrong label.

The mislabelled category or reversed comparison is enough to reject the claim.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Poor performance can drive customers to switch suppliers.

The scenario (customers may switch suppliers if quality falls) supports that classification.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Customers can influence firms through switching or boycotts.

In the case setting — customers may switch suppliers if quality falls — that reading fits the facts given.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Even small-quantity buyers can switch when quality or service disappoints.

Against the scenario (customers may switch suppliers if quality falls), the claim attaches the wrong label.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 46, 'full' ),
( '3.6', 'CASE 3.6.47', 'Community employment stake', 'Analyze a town relies on one factory for many jobs. Evaluate the following economic assertions:', ARRAY['If the factory closes, the community loses jobs linked to that employer.', 'A major employer''s expansion or closure decision affects community stakeholders beyond the factory gate.', 'Residents whose family members work at the plant hold a community stakeholder interest in its future.', 'Local spending from factory wages links community welfare to the firm''s continued operation.', 'Local jobs concentrating on a single company give the community a direct interest in that firm''s continuity.'], ARRAY[true, true, true, true, true], ARRAY['TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Community interests are affected when a major local employer closes.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Communities are affected by business activity and count as stakeholders.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Residents with family members at the plant hold a community stake in its future.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Local spending and jobs link community welfare to the firm''s continued operation.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Local employment ties community interests to firm outcomes.

Under that classification the assertion describes the situation correctly.

The statement is true.
'], '2/5', 47, 'full' ),
( '3.6', 'CASE 3.6.48', 'Government infrastructure role', 'Analyze government builds roads used by a regional distributor. Evaluate the following economic assertions:', ARRAY['Infrastructure used by firms links government investment to business stakeholder context.', 'Tax revenue from trading firms helps fund public infrastructure used by business.', 'Public roads built for general use have no connection to business logistics needs.', 'Regulators may set transport standards affecting firms that depend on road networks.', 'Roads built for public use also support business logistics and distributor operations.'], ARRAY[true, true, false, true, true], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Government affects and is affected by business as a stakeholder.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Fiscal links connect government and business stakeholder interests.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Infrastructure links to economic activity affecting business and public stakeholders.

Once the defining feature is restored, the assertion falls away.

The statement is false.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Government stakeholder role includes regulation affecting business logistics.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Infrastructure links government investment to business activity.

The sentence therefore reports the concept accurately for this item.

The statement is true.
'], '2/5', 48, 'full' ),
( '3.6', 'CASE 3.6.49', 'Environment stakeholder status', 'Analyze the environment as a stakeholder expecting concrete action and reporting. Evaluate the following economic assertions:', ARRAY['Environment is not a stakeholder because it cannot sign contracts.', 'Pollution control matters only to regulators, not to environmental stakeholder theory.', 'Cosmetic eco-labels fully satisfy environmental stakeholders without operational change.', 'Environmental stakeholder theory treats nature as a party expecting action and reporting.', 'Environmental reporting is optional fiction unrelated to stakeholder expectations.'], ARRAY[false, false, false, true, false], ARRAY['FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Environment is treated as a stakeholder expecting action and reporting.

One clear counterexample under the right criterion is enough to reject the sentence.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Environment is a stakeholder expecting genuine action and reporting.

Those restricting words stretch a limited idea past what the definition allows.

The statement is false.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Real action, not slogans, is required on environmental issues.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Environment is a stakeholder expecting action and reporting.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Reporting communicates impacts to environment-focused stakeholders.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 49, 'full' ),
( '3.6', 'CASE 3.6.50', 'Success factors context', 'Analyze stakeholder interests to legal, financial, market, and cost success factors. Evaluate the following economic assertions:', ARRAY['Legal and financial structure shapes how well a firm can meet stakeholder expectations.', 'Market awareness serves only rival analysis and not customer stakeholder needs.', 'Cost control and profitability influence wages, orders, and returns for stakeholder groups.', 'Understanding market trends helps firms respond to customer and competitive pressures.', 'Legal structure is unrelated to business success and stakeholder outcomes.'], ARRAY[true, false, true, true, false], ARRAY['TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal and financial structure are success factors affecting stakeholders.

Under that classification the assertion describes the situation correctly.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Market awareness helps meet customer and competitive pressures.

The absolute wording is what breaks the claim once the correct test is applied.

The statement is false.
', 'TRUE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status. Managers and employees are stakeholders because pay, promotion, and job security depend on the firm''s continued success. Receiving wages does not end that interest.

Costs and profitability connect to owner and employee outcomes.

The sentence therefore reports the concept accurately for this item.

The statement is true.
', 'TRUE — Stakeholders are parties affected by or interested in the business, broader than shareholders alone.

Market awareness supports meeting customer and competitive pressures.

Nothing in the keyed reading contradicts the chapter framing used here, so the claim holds.

The statement is true.
', 'FALSE — Stakeholders are anyone affected by or interested in the firm — customers, suppliers, employees, managers, owners, communities — not voting shareholders alone. Payment or lack of shares does not remove stakeholder status.

Legal structure is listed among success factors affecting performance.

Swap in the textbook criterion and the sentence no longer describes the case.

The statement is false.
'], '2/5', 50, 'full' )
ON CONFLICT (case_id, tier) DO UPDATE SET
  subsection = EXCLUDED.subsection,
  title = EXCLUDED.title,
  context = EXCLUDED.context,
  statements = EXCLUDED.statements,
  answer_key = EXCLUDED.answer_key,
  tactical_explanations = EXCLUDED.tactical_explanations,
  difficulty_level = EXCLUDED.difficulty_level,
  sort_order = EXCLUDED.sort_order,
  tier = EXCLUDED.tier;
