import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Globe, Award } from 'lucide-react';
import Afgar from '../public/asset/Afgar.jpeg';
import Eddo from '../public/asset/Iddo.jpeg';
import Sims from '../public/asset/Sims.jpeg';

interface Executive {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
}

const ExecutiveCard = ({ executive }: { executive: Executive }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const getTruncatedText = (text: string, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    };

    // Generate a placeholder image with initials (fallback)
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    const getGradientColor = (id: number) => {
        const colors = [
            'from-blue-500 to-purple-600',
            'from-green-500 to-teal-600',
            'from-orange-500 to-red-600',
            'from-purple-500 to-pink-600',
            'from-teal-500 to-cyan-600'
        ];
        return colors[id % colors.length];
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
            {/* Header Section */}
            <div className="p-6 pb-4 text-center bg-gradient-to-br from-gray-50 to-white">
                <div className="relative mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24">

                    {executive.image ? (
                        <img
                            src={executive?.image}
                            alt={executive?.name}
                            className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
                            onError={(e) => {

                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}

                    {/* Fallback gradient placeholder */}
                    <div
                        className={`w-full h-full rounded-full bg-gradient-to-br ${getGradientColor(executive.id)} ${executive.image ? 'hidden' : 'flex'} items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg border-4 border-white`}
                    >
                        {getInitials(executive.name)}
                    </div>

                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-3 border-white shadow-sm"></div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">
                    {executive.name}
                </h3>
                <div className="flex items-center justify-center gap-1 mb-3">
                    <Award className="w-4 h-4 text-blue-600" />
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 text-center leading-tight">
                        {executive.position}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 pt-2">
                <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    <div className={`${isExpanded ? '' : 'text-justify'}`}>
                        {isExpanded ? executive.bio : getTruncatedText(executive.bio)}
                    </div>

                    {executive.bio.length > 150 && (
                        <button
                            onClick={toggleExpanded}
                            className="flex items-center gap-1 mt-3 text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium transition-colors duration-200 group"
                        >
                            {isExpanded ? (
                                <>
                                    <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 group-hover:transform group-hover:-translate-y-0.5 transition-transform" />
                                    Show Less
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 group-hover:transform group-hover:translate-y-0.5 transition-transform" />
                                    Read More
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

const ExecutiveSection = () => {
    // Executive data
    const executives: Executive[] = [
        {
            id: 1,
            name: "Dr. Anthonia Omolola Eddo",
            position: "Secretary General",
            bio: "Dr. Anthonia Eddo is a highly respected Nigerian educator, multilingual leader, and international development advocate, currently serving as the Secretary General of the Nigerians in the Middle East Community (NIME). Her role at NIME has positioned her as a key voice for Nigerian expatriates across the region, where she works tirelessly to promote unity, empower individuals, and support the integration and success of Nigerians living and working in the Middle East. Dr. Eddo holds advanced academic qualifications, including a Ph.D., and brings a strong interdisciplinary approach to her work—combining expertise in education, leadership, sustainability, and social advocacy. Fluent in English, French, Yoruba, and Mandarin, she has the unique ability to engage with diverse populations and build cross-cultural bridges that foster understanding and cooperation. A passionate educator at heart, Dr. Eddo has mentored hundreds of students and professionals, particularly focusing on underrepresented and underserved communities. Her initiatives often revolve around capacity building, skills development, and inclusive education—ensuring that more people have access to quality learning opportunities and personal growth. In her work with NIME, Dr. Eddo has led several programs aimed at improving the welfare of Nigerians in the diaspora, from cultural integration and legal advocacy to professional development and mental health support. Her own journey—from navigating isolation as a newcomer in the Middle East to becoming a pillar of community leadership—inspires her commitment to creating safe and supportive spaces for others. In addition to her educational and community work, Dr. Eddo is a vocal advocate for sustainability and environmental responsibility. She integrates these values into her broader mission by encouraging sustainable practices in business, education, and governance. Her strategic vision emphasizes ethical leadership, innovation, and global citizenship. Dr. Anthonia Eddo's legacy is one of empowerment, service, and transformation. Through her leadership, teaching, and advocacy, she continues to shape a brighter future for Nigerians abroad and communities around the world.",
            image: Eddo,
        },
        {
            id: 2,
            name: "Adewole Daniel Adeyemi",
            position: "President - Middle East",
            bio: "🌍 Introducing Adewole Daniel Adeyemi President, NIME Community – Middle East It is with great pride and humility that I step into the role of President of the NIME Community – Middle East. This responsibility is not just a title—it's a call to serve, to uplift, and to unite. Over the years, I've dedicated myself to both professional excellence and community impact. With a solid foundation in Mass Communications (National Diploma & Bachelor's Degree), my journey has spanned 7 years in the banking sector and over 5 years in the UAE, contributing across banking, security, and hospitality industries. Previously, I served as the Security and Safety Coordinator for NIME Community, where I worked tirelessly to ensure the well-being and unity of our members. This experience deepened my connection to the community and fueled my passion for grassroots service and collaboration with international development organizations. 🔍 Vision & Commitment As President, my mission is clear: To drive growth, foster meaningful collaboration, and amplify the voices and potential of every NIME member across the Middle East. My emergence as President is not just a reflection of personal journey—it is a testament to collective belief in leadership that listens, learns, and leads with heart. Together, we will build a stronger, more connected NIME Community that champions excellence, inclusion, and impact. Thank you for the trust and support. In service always, Adewole Daniel Adeyemi President, NIME COMMUNITY – Middle East",
            image: Sims,
        },
        {
            id: 3,
            name: "Sir Abdallah Mohammed Narabi",
            position: "President - Middle East and North Africa",
            bio: "Sir Abdallah Mohammed Narabi - From \"Born Not to Make It\" to Leading a Continental Vision Sir Abdallah Mohammed Narabi—a Nigerian-born entrepreneur, export strategist, and visionary—is the embodiment of what it means to rise above circumstance and redefine national identity through global impact. His journey from hardship to high honor has not only built billion-naira ventures but now culminates in a historic nomination: President of the Nigerians in the Middle East and North Africa (MENA) Community. From Humble Beginnings to Global Recognition Born on August 19, 1979, in Jos North, Plateau State, Abdallah lost his father at just 16, shouldering the responsibility of his family alongside his widowed mother. Forced into business by necessity at 19, he began building grit, insight, and strategy from the streets—not from a safety net. While others sought comfort, he sought knowledge, inspired by global business minds like Perry S. Marshall and Myron Golden. He pursued a Higher National Diploma at NACABS Polytechnic, Nassarawa State, but credits the marketplace—and the rejection-filled road to success—as his true education. A Vision Beyond Survival Turning away from a salaried position at the Jos Electricity Distribution Company with no savings, but a clear vision, Abdallah founded Rated Rolling Rabworld Nigeria Ltd and Easy Sales Export Nigeria Limited. These businesses became launchpads for redefining Nigeria's position in global trade. His achievements include: • Building a ₦15 million business from ₦1,900 in just two months. • Turning ₦25,000 into ₦30 million in three months. • Using ₦75,000 to generate over a billion-naira export transaction in one year. These feats are not myths—they are documented, audited, and replicated success stories that have inspired a movement. Driving National and Regional Transformation What sets Sir Abdallah apart—and what earned him this nomination—is not just his business acumen, but his national service through enterprise. He has developed training platforms and consortium models that have empowered thousands of Nigerians, particularly youth and women, to break into the global market with local products. His mission is bold and actionable: • Replace Nigeria's dependency on imports with a vibrant export culture. • Empower local farmers, artisans, and SMEs to earn foreign income. • Transform Nigeria's reputation in global trade—one success story at a time. This transformational work naturally extended to the Middle East and North Africa, where he built active networks and business frameworks that benefit Nigerians abroad—earning him regional respect and ultimately, this presidential nomination. Thought Leadership and Faith Sir Abdallah is the author of two powerful books: • Speed Selling 101: How to Sell Faster and Dominate Your Market • 7 Things You Need to Know About Export His work spans Africa and the Middle East, with a growing footprint in diaspora communities. Anchored by his deep Islamic faith, he sees his journey not as a pursuit of fame, but a divine mandate to serve, uplift, and reform. Why the MENA Presidency Nomination Matters His nomination as President of Nigerians in the MENA Community is not simply a personal milestone—it is a reflection of his lifelong commitment to the Nigerian people, wherever they reside. His leadership is seen as a bridge between the home country and the diaspora, offering: • Economic empowerment programs • Cross-border trade platforms • Cultural and national pride restoration among Nigerians abroad In a world full of noise, Sir Abdallah has built a legacy of quiet consistency, ethical leadership, and unstoppable impact. He was born not to make it. Yet today, he leads where others only dreamed. Sir Abdallah Mohammed Narabi isn't just a success story— He is the reason others now believe they can write their own.",
            image: Afgar,
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="p-2 bg-blue-100 rounded-full">
                                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                            </div>
                            <div className="p-2 bg-green-100 rounded-full">
                                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            NIME Community
                            <span className="block text-blue-600">Leadership</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                            Meet the dedicated leaders empowering Nigerians in the Middle East and North Africa,
                            fostering community growth, and building bridges across cultures.
                        </p>

                        <div className="mt-8 sm:mt-12 flex items-center justify-center">
                            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Building stronger communities together</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    {executives.map((executive) => (
                        <div key={executive.id} className="flex justify-center">
                            <div className="w-full max-w-sm">
                                <ExecutiveCard executive={executive} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/*/!* Footer CTA *!/*/}
            {/*<div className="bg-gradient-to-r from-blue-600 to-purple-700 py-8 sm:py-12">*/}
            {/*    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">*/}
            {/*        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">*/}
            {/*            Join Our Growing Community*/}
            {/*        </h2>*/}
            {/*        <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">*/}
            {/*            Connect with fellow Nigerians across the Middle East and North Africa.*/}
            {/*            Together, we build stronger networks and brighter futures.*/}
            {/*        </p>*/}
            {/*        <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">*/}
            {/*            Get Connected*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default ExecutiveSection;