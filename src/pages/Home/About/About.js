import React, { useContext } from 'react';
import logo from '../../../assets/image/swos.jpg'
import { AuthContext } from '../../features/AuthProvider';
import { Helmet } from 'react-helmet';

const About = () => {
    const { admin } = useContext(AuthContext)
    console.log(admin)
    return (
        <div className="lg:px-[100px] lg:w-[60%] sm:w-[70%] w-full px-[20px] text-left mx-auto about">
            <Helmet>
                <title>About</title>
            </Helmet>
            <p className="my-[16px]">On May 20, 2017, a non-political humanitarian and social organization of Saidpur {'"'}Social Welfare Organization of Saiddpur-SWOS{'"'} was established by a combination of various professionals, energetic students and young people in the belief of creating an inclusive and livable bright Saiddpur city.
                Our vision:Building a developed, happy, prosperous, humane, benevolent and self-respecting city of Saidpur through social welfare work and self-dedication in the service of humanity and contemporary mass-oriented positive social movement with the utmost of our human values.
                Our Slogan: We Are By Your Side, Fearless.
                Our activities: We have been working in 10 departments in a well-thought-out and well-planned manner.</p>
            <img src={logo}
                className='md:w-[450px] md:h-[450px] w-full opacity-[22%] mt-[-142px]  z-0 mx-auto'
                alt='Logo' />
            <p className='z-[1] lg:mt-[-330px] md:mt[-333px] sm:mt[-524px] mt-[-211px]'><ol className="my-[16px] font-semibold">
                <li>1{')'} Humanitarian activities</li>
                <li>  2{')'} Student welfare activities</li>
                <li>  3{')'} Health care activities</li>

                <li>
                    4{')'} Clean and Green activities
                </li>
                <li>  5{')'} Healthy cultural activities</li>
                <li> 6{')'} Social awareness activities</li>
                <li>       7{')'} Street children and elderly welfare activities</li>
                <li> 8{')'}Intellectual Human Resource Activities</li>
                <li> 9{')'} Information and Communication Technology activities</li>
                <li>   10{')'} Women{"'"}s rights activities</li>
            </ol>


                Each department has a detailed action plan. The organizers of the organization are working tirelessly to implement it.
                Free medical camp, free blood grouping campaign, blood donation, relief activities during various natural calamities, tree planting program, distribution of relief to the helpless poor disadvantaged people during the outbreak of corona virus, conducting online covid clinic through expert doctors,
                through various humanitarian activities including distribution of Eid boxes and zakat, financial support for the marriage of distressed girls,{'"'} SWOS{'"'} has already become a favorite organization of the people of Saidpur.
                We are very committed to our implementation.</p>
        </div>
    );
};

export default About;