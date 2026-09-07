-- Update expanded explanations for 3.1-part1 (25 cases).
-- Safe to re-run: only updates tactical_explanations.

UPDATE public.economics_cases SET tactical_explanations = ARRAY['Labour is the human-resources factor: paid effort that helps produce goods or services. Managers who set schedules are deploying that effort, even when the same people also organise other factors. Coordination duties do not strip the human input out of the labour category.

The statement is true.', 'In a service firm, processing insurance claims is production of a service. Handlers apply human effort to policies and customers, so that work is labour just as clearly as shop-floor tasks are.

The statement is true.', 'Labour covers all human resources used in production, not only physical shop-floor jobs. Planners and accountants still supply labour when they contribute paid effort to the firm''s output. Restricting the factor to manual work alone is too narrow.

The statement is false.', 'Installing software is skilled work that uses human resources to deliver a service. Intangibility does not turn the work into a mere want; wants are goods or services households desire, while labour is the human input that produces them. The installation remains labour.

The statement is false.', 'Seasonal pickers are paid human resources for the weeks they work. Duration of the contract does not remove them from the labour factor. Short employment still counts as labour while it is used in production.

The statement is false.'] WHERE case_id = 'CASE 3.1.01' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Land is the natural-resources factor: soil, climate, water, and sites that production draws on. Hillside vineyards are natural growing sites, so they sit in land rather than in equipment or labour.

The statement is true.', 'Labour is every human resource applied to production. Seasonal pickers and a permanent cellar master both supply human effort to the winery, so both belong in labour.

The statement is true.', 'Capital is productive equipment and related resources used in operations. Ownership is not the test: a leased bottling line is still capital while the winery uses it to bottle wine.

The statement is true.', 'Knowledge is the know-how applied in production. Fermentation technique used in blending is applied experience, so it draws on knowledge as a production factor alongside land, labour, and capital.

The statement is true.', 'Ordering barrels is a capital purchase, but choosing suppliers, timing contracts, and coordinating the other factors is entrepreneurship. Capital decisions do not erase the entrepreneurial role that organises production.

The statement is false.'] WHERE case_id = 'CASE 3.1.02' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Land includes natural resources used in production, not only surface plots. River water drawn for irrigation is a natural input, so it belongs in the land factor.

The statement is true.', 'Standing forests are land as natural resources. Timber already cut and ready for milling is a processed material input, not the land factor itself. Origin in trees does not keep milled logs inside land.

The statement is false.', 'Unextracted minerals and mineral rights over natural deposits are natural resources within land. The fact that rights can be bought and sold does not reclassify them as capital equipment.

The statement is false.', 'Oak comes from forests, but barrels are manufactured equipment used in ageing. Once wood has been processed into barrels for production, those barrels are capital, not land.

The statement is false.', 'Land covers natural resources broadly: sites, forests, fisheries, minerals, and similar inputs. Limiting the factor to fenced factory plots leaves out those natural resources.

The statement is false.'] WHERE case_id = 'CASE 3.1.03' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Capital is equipment and related resources used in production, whether owned or leased. Diagnostic tools that technicians use on the job still function as capital while they support service delivery.

The statement is true.', 'Inventories held so the firm can deliver its service are part of capital. Spare parts kept for same-day repairs are productive stocks supporting operations, so they count as capital.

The statement is true.', 'In this framing, capital takes in machinery, plant, vehicles, and the financial resources applied to run production. Those items are the capital factor when they are committed to operations.

The statement is true.', 'Financial resources used to keep the business running belong to capital. Cash held to meet payroll between invoice cycles is working finance applied to production, so it forms part of capital.

The statement is true.', 'Vehicles used to move finished goods are productive equipment. A delivery fleet shipping output is capital in the distribution stage of production.

The statement is true.'] WHERE case_id = 'CASE 3.1.04' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Secondary production turns materials into goods with plant and tools. Production tools and testing equipment on the line are that plant and equipment, so they are capital.

The statement is true.', 'Engineers who monitor quality apply skilled human effort to the manufacturing process. That specialised human input is labour.

The statement is true.', 'Entrepreneurship organises the other factors and bears business uncertainty. Plant management that coordinates materials, staff, and orders is performing that organising role.

The statement is true.', 'Copper may be mined from the earth, but materials on the factory floor are inputs combined with labour and capital, not the land factor itself. Land is the natural-resource base; processed or purchased materials are a separate input category.

The statement is false.', 'Knowledge applied in production is a recognised factor whether or not the firm holds patents. Patent registration is a legal protection, not the condition that creates the knowledge factor.

The statement is false.'] WHERE case_id = 'CASE 3.1.05' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Entrepreneurship is the organising factor that brings land, labour, and capital together and directs them toward production. That coordinating role is exactly what the factor describes.

The statement is true.', 'Lenders supply finance, but entrepreneurs organise production and bear business uncertainty about whether the venture succeeds. Uncertainty is not shifted entirely onto lenders.

The statement is false.', 'Financial resources are capital when they fund operations or assets. Entrepreneurship is the separate function that coordinates factors and bears organisational risk; finance does not become entrepreneurship by involving decisions.

The statement is false.', 'Hiring staff adds labour, but someone still chooses who to hire, how to combine factors, and what risks to take. Those coordination and risk-bearing tasks remain entrepreneurship.

The statement is false.', 'Choosing equipment allocates capital, yet the act of selecting and organising inputs is entrepreneurial. Capital allocation does not remove entrepreneurship from the picture.

The statement is false.'] WHERE case_id = 'CASE 3.1.06' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Technology is tools, systems, and techniques applied in production. Diagnostic software licences that repair technicians use to deliver services are technology in a service setting.

The statement is true.', 'Knowledge is applied know-how and experience in production. Fermentation technique used in winemaking is exactly that kind of production knowledge.

The statement is true.', 'A repair bench is a service workplace. Technology used there to diagnose and fix equipment is still a production factor; services are not exempt from the technology factor.

The statement is true.', 'Technology matters wherever it is applied to produce goods or services. Limiting it to firms that manufacture hardware leaves out service uses such as diagnostic systems and software tools.

The statement is false.', 'Storing designs on servers does not turn know-how into capital. Capital is equipment and financial resources; design know-how applied in production remains knowledge.

The statement is false.'] WHERE case_id = 'CASE 3.1.07' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Refurbishing laptops and billing support calls draws on skills, tools, finance, and organisation together. That mix is knowledge, labour, technology, capital, and entrepreneurship combined in one service venture.

The statement is true.', 'Entrepreneurship organises resources and bears business uncertainty. Coordinating bookings, parts orders, and repair work is that organising function for the IT-support venture.

The statement is true.', 'Repair kits and licensed diagnostic apps are techniques and systems used to perform the service. They form the technology layer of the offer alongside labour and capital stocks.

The statement is true.', 'Spare screens and batteries held for repairs are inventories that enable service delivery. Inventories used in operations belong to capital.

The statement is true.', 'Diagnosing faults is paid human effort in production of a repair service. Staff time on diagnosis is therefore the labour input.

The statement is true.'] WHERE case_id = 'CASE 3.1.08' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Service firms still need premises, tools, systems, and someone to organise the offer. Labour works with capital, technology, and entrepreneurship rather than standing alone.

The statement is true.', 'A business exists by combining production factors to create goods, services, or both for customers. That combination is the basic production story.

The statement is true.', 'One factor may dominate in a given industry, but production still needs complementary inputs. Dominance does not cancel the need to combine other factors.

The statement is false.', 'Manufacturing and services both combine multiple factors. Services use labour with capital, technology, and coordination, not labour in isolation.

The statement is false.', 'Automated lines raise the weight of capital, but people still operate, maintain, and direct the plant, and knowledge still guides processes. Automation does not wipe labour and knowledge out of manufacturing.

The statement is false.'] WHERE case_id = 'CASE 3.1.09' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Oak barrels used to age wine are equipment and inventories in the production process. Assets used that way belong to capital.

The statement is true.', 'Fermentation experience is applied know-how. That knowledge sits beside land, labour, and capital in winemaking rather than replacing them.

The statement is true.', 'Large vineyards supply natural resources (land), workers supply labour, equipment and stocks supply capital, and management organises the mix. Winemaking with substantial vineyards therefore combines those factors, including entrepreneurship.

The statement is true.', 'Soil fertility is a natural-resource land input. Bottling machinery on the same property is productive equipment, so it is capital. Location on one site does not merge the two factors.

The statement is true.', 'Labour includes all human resources used in production. Seasonal staff supply labour for the harvest period just as permanent employees do year-round.

The statement is false.'] WHERE case_id = 'CASE 3.1.10' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Capital is the stock of resources used in production. Entrepreneurship is the separate function that organises those resources and bears business uncertainty. The two factors are not the same thing.

The statement is true.', 'Planning hours are human effort spent organising production. Digital storage of plans is just a recording medium; the productive content of those hours is still the people who plan.

The statement is true.', 'An owner who also repairs can supply both factors at once: task work is labour, and running the shop, coordinating suppliers, and bearing risk is entrepreneurship. One person can wear both roles.

The statement is true.', 'Founder work that lines up suppliers and staff is organising production factors. That coordination is entrepreneurship and stays distinct from the physical or routine task work labelled labour.

The statement is true.', 'Risk-bearing and organising resources is the entrepreneurial function. Hours spent on that work do not turn uncertainty-bearing into labour merely because time is used.

The statement is false.'] WHERE case_id = 'CASE 3.1.11' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Capital is productive equipment used in operations. A leased bottling line is still that equipment for the winery while it runs, so lease status does not remove it from capital.

The statement is true.', 'Warehouse robots used in picking and packing are machinery in distribution. Leased or owned, they remain capital beside any manual pickers.

The statement is true.', 'Renting the building does not reclassify tools installed or used inside it. Those tools stay capital when they support production or distribution.

The statement is false.', 'Hire-purchase is a financing path for equipment. Machines standing in a workshop are capital assets used in production, not land.

The statement is false.', 'Outdoor use does not turn machinery into land. Leased harvesters remain capital; land is the natural resource or site, not the machine that works on it.

The statement is false.'] WHERE case_id = 'CASE 3.1.12' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Crew members running chainsaws and harvesters apply human effort to extraction. That human input is labour.

The statement is true.', 'Supervision can include scheduling crews, haulage, and timing access before winter. Those organising choices are entrepreneurship, so supervision is not locked forever into labour alone.

The statement is false.', 'Trees are a land-based natural resource, but logging still needs workers, machines, and someone to coordinate the cut. Land alone does not extract timber.

The statement is false.', 'Harvesters are machinery used to fell timber. Operating on forest terrain does not make the machines land; they remain capital.

The statement is false.', 'Standing forests stay in the land factor as natural resources. Cutting with harvesters does not convert the forest into capital; the harvesters themselves are the capital.

The statement is false.'] WHERE case_id = 'CASE 3.1.13' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Working capital that funds payroll between invoices is finance applied to keep production running. That financial resource is part of capital.

The statement is true.', 'Borrowed funds used to buy diagnostic tools are finance committed to productive assets. Finance used that way is capital applied to production.

The statement is true.', 'Capital covers both physical equipment and the financial resources used in operations. The factor is not limited to machines alone.

The statement is true.', 'Share capital is one financing form, not the whole capital factor. Manufacturers also use equipment, inventories, and other financial resources in production.

The statement is false.', 'Cash held for operations is a financial capital resource. Storage on the premises does not turn emergency cash into land.

The statement is false.'] WHERE case_id = 'CASE 3.1.14' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Labour is human resources used to produce goods or services. Service staff apply that effort when they handle clients, claims, or coaching, so they sit inside labour with other paid roles.

The statement is true.', 'Technical support staff troubleshooting home networks apply human effort to a service. That work is labour in a knowledge-intensive setting.

The statement is true.', 'Freelance trainers still supply human resources when they deliver coaching for the studio. Contract form does not remove them from labour while they produce the service.

The statement is true.', 'Installing software for a client uses skilled human effort. Those human skills are labour in service production.

The statement is true.', 'Labour covers specialists and general staff alike whenever human resources are deployed in production. Skill level does not create a separate factor outside labour.

The statement is true.'] WHERE case_id = 'CASE 3.1.15' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Fabric bought for client orders is a material input. Tailoring combines those materials with labour (apprentices and the tailor) and capital (sewing machines), not materials alone.

The statement is true.', 'Selecting machines and scheduling orders organises inputs and timing for the workshop. That organising role is entrepreneurship.

The statement is true.', 'Apprentices who cut patterns and stitch garments supply human effort to garment production. That effort is labour.

The statement is true.', 'Designs in the tailor''s head are knowledge, but the workshop still needs machines, fabric, and coordination. Labour alone does not produce finished garments.

The statement is false.', 'Hire-purchase machines occupy space, yet they are productive equipment. Workshop floor space does not reclassify sewing machines as land.

The statement is false.'] WHERE case_id = 'CASE 3.1.16' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Clean-room tools and testing gear are manufacturing equipment. In secondary production those assets are capital.

The statement is true.', 'Engineering teams that monitor batches apply skilled human effort to the process. That inspection and engineering work is skilled labour.

The statement is true.', 'Fabrication needs people, materials, and machines together. Labour and materials sit beside capital equipment rather than being optional extras.

The statement is true.', 'A components manufacturer runs a workforce, buys materials, uses equipment, and needs direction of the whole mix. That combination is labour, materials, capital, and entrepreneurship.

The statement is true.', 'Process specifications applied on the line are technical know-how used in production. That applied knowledge is a production factor.

The statement is true.'] WHERE case_id = 'CASE 3.1.17' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Screen replacement uses technician effort (labour), spare parts stock (capital), and often diagnostic software or tools (technology). The job combines those factors rather than relying on one alone.

The statement is true.', 'A refurbished-laptop workshop needs tools and spares plus cash to fund stock and operations. Those are capital and technology resources working with labour in the service.

The statement is true.', 'Tools raise the capital and technology content of repairs, but technicians still supply labour and diagnostic systems still supply technology. Tools do not make the job capital-only.

The statement is false.', 'Intangible services still use software, diagnostic apps, and other techniques. Technology remains a factor when it is applied to deliver the service.

The statement is false.', 'Licences used to run diagnostic or repair software are production technology for the workshop. Calling them consumer subscriptions misses their role as tools of service delivery.

The statement is false.'] WHERE case_id = 'CASE 3.1.18' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Knowledge-intensive startups often weight skills and technology heavily and use little land. Factor mixes can lean that way without dropping the other inputs entirely.

The statement is true.', 'Heavy capital in manufacturing still needs someone to organise plant, materials, and schedules. Entrepreneurship continues to coordinate production in capital-weighted settings.

The statement is true.', 'Farming uses land intensively, but it still needs workers, equipment, and management. Land dominance does not mean labour, capital, and entrepreneurship disappear.

The statement is true.', 'Industries emphasise different factors, yet viable firms still combine several inputs. Dominant mix and multi-factor combination can both be true.

The statement is true.', 'Automation raises capital intensity, but plants still need operators, maintenance staff, and managerial coordination. Labour and entrepreneurship are reduced in weight, not removed entirely.

The statement is false.'] WHERE case_id = 'CASE 3.1.19' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Claims handlers learning and using the new case system apply human effort to insurance services. Training and processing work is labour in the branch.

The statement is true.', 'Calendars are tools; people schedule the training. Managers who plan staff time deploy labour and often entrepreneurship, not an impersonal calendar acting as labour.

The statement is false.', 'Premises may involve a land or property element, but operational computers are equipment used to deliver the service. Those computers are capital, not land by location alone.

The statement is false.', 'Insurance software is a technology input used to process claims. The tertiary sector is the service activity itself; the software is a factor inside that activity, not the sector label.

The statement is false.', 'Policies are intangible, yet the office still needs systems, premises, finance, and coordination. Intangibility does not reduce insurance to labour alone.

The statement is false.'] WHERE case_id = 'CASE 3.1.20' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Choosing and approving tank upgrades organises capital investment for higher volumes. That strategic coordination is entrepreneurship at the co-op board.

The statement is true.', 'Member milk comes from farms that use agricultural land and primary production. Upstream dairy supply therefore links the co-op to land-based primary activity.

The statement is true.', 'Processing milk at the co-op uses workers, tanks and plant, and management, while the milk itself traces back to land-based farming. The plant combines labour, capital, and coordination with those upstream land inputs.

The statement is true.', 'Cooling tanks and pasteurisers are processing machinery. Installed equipment of that kind is capital at the co-op.

The statement is true.', 'Operators who watch pasteurisation and tank levels supply human effort to processing. That monitoring work is labour.

The statement is true.'] WHERE case_id = 'CASE 3.1.21' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Customer training on new releases uses trainers'' effort, product know-how, and the software or systems being taught. Labour, knowledge, and technology therefore appear together.

The statement is true.', 'A software-related service still needs know-how and tools, not entrepreneurship in isolation. Coordination alone without knowledge or technology does not describe the production mix.

The statement is false.', 'Design stored on servers is still applied know-how. The storage medium does not turn knowledge into capital equipment.

The statement is false.', 'Applied know-how is a production factor when it is used, with or without a patent. Formal registration is optional protection, not the switch that creates the knowledge factor.

The statement is false.', 'Coding skill is skilled labour: human resources applied to writing software. Initiative on tasks does not by itself make the programmer''s work entrepreneurship; entrepreneurship organises the firm and bears its uncertainty.

The statement is false.'] WHERE case_id = 'CASE 3.1.22' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['A cellar master and seasonal pickers both supply human resources to the winery. Permanent or seasonal status does not change the labour classification.

The statement is true.', 'Seasonal pickers who receive pay for harvest weeks supply human resources for production. Temporary contracts change how long they work, not whether that effort is labour.

The statement is true.', 'Bottling is processing work performed by people during harvest. That human effort is labour used beside land and capital inputs.

The statement is true.', 'Pickers and field supervisors both deploy human resources. Supervisory effort in the harvest remains labour when it is task work within production.

The statement is true.', 'Short-term contracts change duration, not factor class. Paid pickers on seasonal contracts still supply labour.

The statement is false.'] WHERE case_id = 'CASE 3.1.23' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Delivery vans that ship finished boards are vehicles used in production-related distribution. Those vehicles are capital in the logistics stage.

The statement is true.', 'Logistics needs vans or trucks, drivers, and someone to organise routes and loads. Capital equipment therefore works with labour and coordination.

The statement is true.', 'Leased trucks used in operations are still productive equipment. Lack of ownership does not remove them from capital.

The statement is false.', 'Drivers supply human effort; that is labour. The vehicles they operate remain capital. Operating a machine does not turn the operator into capital.

The statement is false.', 'Fuel is an operating input consumed when capital equipment runs. Natural origin does not place fuel in the land factor the way unextracted deposits or sites are land.

The statement is false.'] WHERE case_id = 'CASE 3.1.24' AND tier = 'full';
UPDATE public.economics_cases SET tactical_explanations = ARRAY['Rented studio space is a facility used to deliver coaching, and booking systems are tools for running the service. Together they supply capital and technology supporting the offer.

The statement is true.', 'Coaching sessions use trainers, premises, booking tools, and an owner who organises the studio. Labour therefore sits with capital, technology, and entrepreneurship.

The statement is true.', 'Freelance trainers deliver the sessions as human resources for the studio. Their contractor status does not remove that effort from labour.

The statement is true.', 'Marketing the courses is organising and promoting the studio''s offer. That work belongs to the owner or staff as entrepreneurship and labour, not to customers.

The statement is false.', 'Freelancers supply labour for sessions, but someone still sets the offer, rents space, and bears the studio''s risk. Entrepreneurship remains with the organisers beside contractor labour.

The statement is false.'] WHERE case_id = 'CASE 3.1.25' AND tier = 'full';
