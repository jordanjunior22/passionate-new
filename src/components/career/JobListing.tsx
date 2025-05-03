"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

const jobs = [
  {
    id: 1,
    title: "Direct Support Professional",
    location: "Alexandria, VA, USA",
    postedDate: "January 02, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for PART-TIME & PRN (as needed) Direct Support Professionals for our home in Alexandria, VA.
  
  **Position Summary:**
  This position provides direct care to individuals with developmental/intellectual disabilities in a residential setting. The purpose of this position is to provide designated services and to ensure a healthy, safe and supportive living environment for individuals participating in Passionate Center & Homes HCS programs. As a Direct Support Professional, you’ll assist individuals with developmental disabilities in daily living activities, promoting independence and community integration.
  
  **Duties and Responsibilities:**
  - Keeps current with all mandatory training requirements including but not limited to CPR, First Aid, TOVA.
  - Educates, monitors, and coaches residents as needed to ensure residents understand the purpose and importance of taking medications as prescribed.
  - Provides therapeutic supervision including mentoring and interacting with residents.
  - Assists residents with meal preparation and nutritional intake as needed and provide meals according to shift requirements.
  - Assists residents with activities of daily care and living as needed.
  - Completes required documentation, including but not limited to shift reports, progress notes, and serious incident reports.
  - Monitors the physical environment of the facility and its equipment; takes appropriate measures to correct any identified safety hazard; ensures the environment is clean and orderly.
  - Assists the Team Leader in maintaining standards and regulations that are required by the program.
  - Provides transportation as assigned by Team Leader.
  - Assists with ordering medications, checking in cycle medications, and maintaining the med cart.
  
  **Required Experience or professional qualifications:**
  - Experience providing services to individuals with behavioral health challenges.
  - Prefer candidates with a bachelor’s degree in psychology, social work, or human services.
  - Strong oral and written communication skills are essential.
  - The ability to establish strong therapeutic relationships with individuals is essential.
  - Must have Medication Aide Training, CPR, and TOVA Certifications; (will train after hire).
  - At least 21 years of age.
  - Valid driver's license.
  - Background and DMV Checks.
  
  **Minimum Knowledge, Skills, And Abilities:**
  - A strong set of clinical writing skills to ensure documentation represents the consumer's needs and voice and remains licensing compliant.
  - Knowledge of the characteristics and concepts of disabilities, behavioral and mental health, health disorders, and related physical conditions and treatment approaches for persons with developmental and intellectual disabilities.
  - Meet the requirements as a QDDP.
  - Knowledge of simple nursing care, first aid, behavioral management, personal and environmental hygiene.
  - Ability to implement and follow policies and procedures of the DBHDS and Passionate Center & Homes HCS.
  - Ability to assist individuals in learning skills related to progress toward independence.
  - Ability to engage individuals in developing new skills related to independence.
  - Ability to participate with professional staff in the design and implementation of training and programmatic activities.
  - Ability to observe the rights and personal dignity of others.
  - Ability to observe, record, and report clients' behavior, attitude, and physical condition.
  - Ability to perform simple math and communicate effectively, both orally and in writing.
  - Ability to maintain effective working relationships with clients and other employees.
  - Ability to stand, sit, walk and lift up to 25 lbs throughout shift.
  
  **Pay:** $18.00 - $22.00 per hour
  
  **Schedule:** 
  - 8 hour shift
  - Day shift
  - Evening shift
  - Every weekend
  - Monday to Friday
  - Morning shift
  - Night shift
  - On call
  - Overnight shift
  - Rotating weekends
  - Weekends as needed
  - Weekends only
  
  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off
  
  **Other Details:**
  - Medical Specialty: Psychiatry
  - Ability to commute to Alexandria, VA 22311 (Required)
  - Ability to relocate to Alexandria, Virginia before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: In person`
  },
  
  {
    id: 2,
    title: "DD/IDD Health Technician - Team Lead",
    location: "Alexandria, VA, USA",
    postedDate: "May 15, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for a Team Leader for our locations in NOVA/ Alexandria, VA.
  
  **Position Summary:**
  The Team Leader will provide guidance and supervision to front-line staff who care for individuals with a variety of developmental/intellectual disabilities and behavioral health issues, who reside in the program. Helps address the needs of the residents and helps ensure individuals service plans are being implemented appropriately, responsible for recruiting and hiring/training new staff and scheduling staff/responding to staff absences.
  
  **Duties and Responsibilities:**
  - Supports the mission, vision and values of Passionate Center & Homes HCS.
  - Adheres to the personnel policies of Passionate Center & Homes HCS.
  - Adheres to the terms and stipulations of each program’s license as issued by the Department of Behavioral Health and Developmental Services, including Human Rights regulations.
  - Adheres to all applicable federal, state, or local laws and regulations regarding the Americans with Disabilities Act and the Virginians with Disabilities Act.
  - Assists the Program Director in maintaining standards and regulations that are required by the program.
  - Supports the Program Director, Recovery Support Specialists, and co-workers by being a proactive and engaged member of the team.
  - Participates in clinical meetings and mandatory staff meetings.
  - Maintains standards of clinical care and compliance with all regulations applicable to the Program including licensing and human rights standards.
  - Provides oversight of the day-to-day operations by; 
  - Ensuring disability health support services are consistent with the person centered plans and program schedule of activities.
  - Psychiatric and medical needs are identified and appropriate follow-up care is arranged. 
  - Case management needs are addressed.
  - Supervision of the team functions to effectively meet the need of the individuals served.
  - Interfacing with other professionals and family members.
  - Provides administrative oversight of the day-to-day operations by;
  - Making staff assignments,
  - Arranging for physical plant and vehicle cleaning and repairs as needed, and Ensuring shopping is completed for food and other supplies.
  
  - Completes or assigns qualified staff to complete:
  - Initial Person Centered Plans and Quarterly Plan reviews,
  - Written documentation including but not limited to shift reports, daily progress notes, serious incident reports, mental health support notes, and family and professional contacts,
  - Provides mental health support, and involves residents in community activities as specified in the individual services plan,
  - Keeps current with all mandatory training requirements including but not limited to CPR, First Aid, Medication Aide Training, and TOVA,
  - Keeps current with all mandatory reporting including annual Tuberculosis Screening and Driving Records; 
  
  **Required Experience or professional qualifications:**
  - Prior experience working in a residential setting for persons with serious mental illnesses is essential. Previous supervisory experience is preferred. 
  - Certification as a QDDP is required. 
  - Strong oral and written communication skills, problem solving skills, ability to multi-task, and ability to resolve conflict are essential.
  
  **Minimum Knowledge, Skills, And Abilities:**
  - Knowledge of the concepts of evidenced based practices and related physical conditions and multiple treatment modalities for persons with serious mental illness;
  - Knowledge of the Principles of Recovery;
  - Knowledge of first-aid, behavioral management, personal and environmental hygiene;
  - Ability to complete documentation in a thorough and timely manner;
  - Ability to provide supportive counseling and rehabilitation services in a residential setting;
  - Ability to implement mission, vision, values, policies, and procedures of Passionate Center & Homes HCS;
  - Ability to engage, lead, and supervise staff in the design and implementation of rehabilitative activities, supportive counseling services, and 24 hour residential care;
  - Ability to maintain effective working relationships with clients and other employees;
  - Ability to collaborate professionally with other agencies.
  
  **Pay:** $45,000.00 - $55,000.00 per year
  
  **Schedule:** Monday - Friday (8:00 a.m. - 4:00 p.m.), must be available for emergency on-calls
  
  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off
  
  **Other Details:**
  - Medical Specialty: Home Health
  - Hybrid work, must be located within Virginia
  - Ability to commute to Alexandria, VA 22311 (Required)
  - Ability to relocate to Alexandria, Virginia before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: In person`
  },
  {
    id: 3,
    title: "Care Coordinator",
    location: "Alexandria, VA, USA",
    postedDate: "April 22, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for PART-TIME & PRN (as needed) Care Coordinator for our location in Alexandria, VA.
  
  **Position Summary:**
  This position provides direct care to individuals with developmental/intellectual disabilities in a residential setting. The purpose of this position is to provide designated services and to ensure a healthy, safe and supportive living environment for individuals participating in Passionate Center & Homes HCS programs. As a Care Coordinator, you’ll assist individuals with disabilities in coordination of external appointments and community integration.
  
  **Duties and Responsibilities:** 
  - Supports the mission, vision, and values of Passionate Center & Homes HCS.
  - Maintains standards of clinical care and compliance with all regulations applicable to the Program including licensing and human rights standards.
  - Maintains a calendar of all appointments outside the facility and ensures transportation is arranged.
  - Works with residents, providers, and Team Leader to ensure clients attend scheduled meetings and that there is sufficient staff available to meet the demands.
  - Works with residents to ensure they communicate with him/her prior to scheduling appointments so that sufficient staffing is available.
  - Aids in ensuring client/facility have copies of insurance cards so that client can receive appropriate/covered medical care.
  - Maintains good working relationships with external providers and ensures residents’ needs are being met.
  - May be asked to administer and monitor medication as prescribed.
  - Assist residents in obtaining appropriate documentation such as birth certificates, picture ID, SS cards, etc.
  - Assist residents with activities of daily living.
  - Provide transportation as deemed necessary.
  - Complete mental health skills training as deemed appropriate based on client’s ISP.
  - Supports residential team staff in completing all admission and discharge documentation in accordance with licensing standards.
  - Keeps current with all mandatory training requirements. 
  
  **Required Experience or professional qualifications:** 
  - Experience providing services to Individuals with behavioral health challenges.
  - Strong oral and written communication skills are essential.
  - Must have at least 1 year of experience working with SMI adults.
  - Must have Medication Aid Training, CPR, First Aid and TOVA Certifications; (will train after hired)
  - Valid driver's license.
  - Background and DMV Checks.
  
  **Minimum Knowledge, Skills, And Abilities:** 
  - Knowledge of the Principles of Recovery.
  - Knowledge of first-aid, behavioral management, personal and environmental hygiene.
  - Ability to complete documentation in a thorough and timely manner.
  - Ability to provide supportive counseling and rehabilitation services in a residential setting.
  - Ability to implement mission, vision, values, policies, and procedures of Passionate Center & Homes HCS.
  - Requires exceptional coordination and communications skills.
  - Ability to maintain effective working relationships with residents and other employees.
  - Ability to collaborate professionally with other agencies.
  
  If you are looking to join an agency that is growing in the State of Virginia and on the cutting edge of developmental/intellectual disability health and rehabilitative services, Passionate Center & Homes HCS may be a great fit for you!
  
  The position is non-exempt from the Fair Labor Standards Act and is subject to the personnel policies of Passionate Center & Homes HCS and reports to the Team Leader/Supervisor.
  
  Passionate Center & Homes HCS strictly prohibits and does not tolerate discrimination against, or harassment of, employees, applicants, clients, or any other covered persons because of age, race, ethnicity, religion, culture, language, physical or mental disability, socioeconomic status, sex (sexual orientation, gender identity or expression and pregnancy), protected veteran status, marital status, genetic information, or any other protected characteristics under applicable federal, state, or local law.
  
  **Job Types:** Part-Time, PRN
  
  **Pay:** $18.00 - $22.00 per hour
  
  **Expected hours:** No less than 25 per week
  
  **Schedule:**
  - 8 hour shift
  - Day shift
  - Evenings as needed
  - Evening shift
  - Every weekend
  - Monday to Friday
  - Morning shift
  - On call
  - Rotating weekends

  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off
  
  **Others:**
  - Medical Specialty: Psychiatry
  - Ability to Commute: Alexandria, VA 22311 (Required)
  - Ability to Relocate: Alexandria, Virginia: Relocate before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: In person`
  },
  {
    id: 4,
    title: "Recovery Support Specialist",
    location: "Alexandria, VA, USA",
    postedDate: "April 22, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for PART-TIME & PRN (as needed) Recovery Support Specialist for our home in Alexandria, VA.
  
  **Position Summary:**
  This position provides direct care to individuals with developmental/intellectual disabilities in a residential setting. The purpose of this position is to provide designated services and to ensure a healthy, safe and supportive living environment for individuals participating in Passionate Center & Homes HCS programs. As a Recovery Support Specialist, you’ll assist individuals with developmental disabilities in daily living activities, promoting independence and community integration.
  
  **Duties and Responsibilities:** 
  - Keeps current with all mandatory training requirements including but not limited to CPR, First Aid, TOVA.
  - Educates, monitors, and coaches residents as needed to ensure residents understand the purpose and importance of taking medications as prescribed.
  - Provides therapeutic supervision including mentoring, and interacting with residents.
  - Assists residents with meal preparation and nutritional intake as needed and provide meals according to shift requirements.
  - Assists residents with activities of daily care and living as needed.
  - Completes required documentation, including but not limited to shift reports, progress notes, and serious incident reports.
  - Monitors the physical environment of the facility and its equipment, take appropriate measures to correct any identified safety hazard, ensures the environment is clean and orderly.
  - Assists the Team Leader in maintaining standards and regulations that are required by the program.
  - Assists with ordering medications, checking in cycle medications, and maintaining the med cart.
  
  **Required Experience or professional qualifications:** 
  - Experience providing services to Individuals with behavioral health challenges.
  - Prefer candidates with a bachelor’s degree in psychology, social work, or human services.
  - Strong oral and written communication skills are essential.
  - The ability to establish strong therapeutic relationships with individuals is essential.
  - Must have Medication Aid Training, CPR, and TOVA Certifications; (will train after hired)
  - At least 21 years of age.
  - Valid driver's license.
  - Background and DMV Checks.
  
  **Minimum Knowledge, Skills, And Abilities:**
  - A strong set of clinical writing skills to ensure documentation represents the consumer's needs and voice and remains licensing compliant.
  - Knowledge of the characteristics and concepts of disabilities, behavioral and mental health, health disorders, and related physical conditions and treatment approaches for persons with serious mental illness.
  - Meet the requirements as a QMHP.
  - Knowledge of simple nursing care, first-aid, behavioral management, personal and environmental hygiene.
  - Provides transportation as assigned by Team Leader.
  - Ability to implement and follow policies and procedures of the DBHDS and Passionate Center & Homes HCS.
  - Ability to assist individuals in learning skills related to progress toward recovery.
  - Ability to engage individuals in developing new skills related to independence.
  - Ability to participate with professional staff in the design and implementation of training and programmatic activities.
  - Ability to observe the rights and personal dignity of others.
  - Ability to observe, record, and report clients' behavior, attitude, and physical condition.
  - Ability to perform simple math and communicate effectively, both orally and in writing.
  - Ability to maintain effective working relationships with clients and other employees.
  - Ability to stand, sit, walk and lift up to 25 lbs throughout shift.
  
  If you are looking to join an agency that is growing in the State of Virginia and on the cutting edge of developmental/intellectual disability health and rehabilitative services, Passionate Center & Homes HCS may be a great fit for you!
  
  The position is non-exempt from the Fair Labor Standards Act and is subject to the personnel policies of Passionate Center & Homes HCS and reports to the Team Leader/Supervisor.
  
  Passionate Center & Homes HCS strictly prohibits and does not tolerate discrimination against, or harassment of, employees, applicants, clients, or any other covered persons because of age, race, ethnicity, religion, culture, language, physical or mental disability, socioeconomic status, sex (sexual orientation, gender identity or expression and pregnancy), protected veteran status, marital status, genetic information, or any other protected characteristics under applicable federal, state, or local law.
  
  **Job Types:** Part-Time, PRN
  
  **Pay:** $18.00 - $22.00 per hour
  
  **Expected hours:** No less than 25 per week

  **Schedule:**
  - 8 hour shift
  - Day shift
  - Evenings as needed
  - Evening shift
  - Every weekend
  - Monday to Friday
  - Morning shift
  - Night shift
  - On call
  - Overnight shift
  - Rotating weekends
  - Weekends as needed
  - Weekends only

  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off
  
  **Others:**
  - Medical Specialty: Psychiatry
  - Ability to Commute: Alexandria, VA 22311 (Required)
  - Ability to Relocate: Alexandria, Virginia: Relocate before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: In person`
  },
  {
    id: 5,
    title: "Clinical Resource Coordinator",
    location: "Alexandria, VA, USA",
    postedDate: "May 02, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for Full-TIME & PART-TIME Clinical Resource Coordinator for our homes in NOVA/ Alexandria, VA.
  
  **Position Summary:**
  This position is responsible for coordination of the clinical resources available to each individual with developmental/intellectual disabilities, participating in Passionate Center & Homes HCS programs. As a Clinical Resource Coordinator, you’ll assist individuals with disabilities in coordination of and acquiring resources available to support individuals.
  
  **Duties and Responsibilities:** 
  - Supports the mission, vision and values of Passionate Center & Homes HCS.
  - Maintains standards of clinical care and compliance with all regulations applicable to the Program including licensing and human rights standards.
  - Supports residential team staff in completing all admission and discharge documentation in accordance with licensing standards.
  - Provides person-centered coordination of community-based resources including, but not limited to:
    - Entitlement benefit application and follow up.
    - Programming activity coordination.
    - Housing referrals.
    - Referrals to specialized residential treatment programs (as needed).
    - Referrals to DARS for job training (as needed).
  - Coordinates the transitions of individuals between levels of care.
  - Keeps all clinical documentation deadlines updated for residential team staff.
  - Provides mental health support, and involves residents in community activities as specified in the individual services plan.
  - Keeps current with all mandatory training requirements.
  - Other duties, as assigned.
  
  **Required Experience or Professional Qualifications:** 
  - Must have a minimum of a bachelor’s degree in psychology, counseling, social work, or human services.
  - Applicant must meet the criteria as a Qualified Mental Health Professional(QMHP) or Qualified Developmental Disabilities Professional(QDDP) and be certified to administer medications in accordance with the requirements of §54.1-3408 et seq. of the Code of Virginia, as amended.
  - Must have 1 year of experience working with individuals with serious mental illness.
  - Must be knowledgeable about entitlement and benefit programs.
  - Experience providing services to individuals with behavioral health challenges.
  - Strong oral and written communication skills are essential.
  - The ability to establish strong therapeutic relationships with individuals is essential.
  - Must have Medication Aid Training, CPR, and TOVA Certifications; (will train after hired).
  - At least 21 years of age.
  - Valid driver's license.
  - Background and DMV Checks.
  
  **Minimum Knowledge, Skills, And Abilities:**
  - A strong set of clinical writing skills to ensure documentation represents the consumer's needs and voice and remains licensing compliant.
  - Knowledge of the characteristics and concepts of disabilities, behavioral and mental health, health disorders, and related physical conditions and treatment approaches for persons with developmental, intellectual disabilities.
  - Meet the requirements as a QDDP.
  - Knowledge of simple nursing care, first-aid, behavioral management, personal and environmental hygiene.
  - Provides transportation as assigned by Team Leader.
  - Ability to implement and follow policies and procedures of the DBHDS and Passionate Center & Homes HCS.
  - Ability to assist individuals in learning skills related to progress toward independence.
  - Ability to engage individuals in developing new skills related to independence.
  - Ability to participate with professional staff in the design and implementation of training and programmatic activities.
  - Ability to observe the rights and personal dignity of others.
  - Ability to observe, record, and report clients' behavior, attitude, and physical condition.
  - Ability to perform simple math and communicate effectively, both orally and in writing.
  - Ability to maintain effective working relationships with clients and other employees.
  - Ability to stand, sit, walk and lift up to 25 lbs throughout shift.
  
  If you are looking to join an agency that is growing in the State of Virginia and on the cutting edge of developmental/intellectual disability health and rehabilitative services, Passionate Center & Homes HCS may be a great fit for you!
  
  The position is non-exempt from the Fair Labor Standards Act and is subject to the personnel policies of Passionate Center & Homes HCS and reports to the Team Leader/Supervisor.
  
  Passionate Center & Homes HCS strictly prohibits and does not tolerate discrimination against, or harassment of, employees, applicants, clients, or any other covered persons because of age, race, ethnicity, religion, culture, language, physical or mental disability, socioeconomic status, sex (sexual orientation, gender identity or expression and pregnancy), protected veteran status, marital status, genetic information, or any other protected characteristics under applicable federal, state, or local law.
  
  **Job Type:** Full-time
  
  **Pay:** $40,000.00 - $45,000.00 per year
  
  **Expected hours:** Monday - Friday (8:00 a.m. - 4:00 p.m.) Must be available for emergency on-calls
  
  **Schedule:**
  - 8 hour shift
  - Day shift
  - Evenings as needed
  - Evening shift    
  - Monday to Friday
  - Morning shift
  - On call
  
  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off

  **Others:**
  - Medical Specialty: Home Health
  - Ability to Commute: Alexandria, VA 22311 (Required)
  - Ability to Relocate: Alexandria, Virginia: Relocate before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: In person`
  },
  {
    id: 6,
    title: "Behavioral Health Clinician",
    location: "Alexandria, VA, USA",
    postedDate: "May 02, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for Full-TIME & PART-TIME Behavioral Health Clinician for our location in NOVA/ Alexandria, VA.
  
  **Position Summary:**
  This position is responsible to provide consolidated care management to each individual with developmental/intellectual disabilities, participating in Passionate Center & Homes HCS community-based programs. The position includes completion of treatment plans, linking clients to community resources, medication management, mental health skill building, and client advocacy to support individuals.
  
  **Duties and Responsibilities:** 
  - Supports the mission, vision, and values of Passionate Center & Homes HCS.
  - Maintains standards of clinical care and compliance with all regulations applicable to programming including licensing and human rights standards.
  - Mandatory certification and training course requirements include CPR, First Aid, TOVA, and behavior management.
  - Completing documentation requirements for Individual Support Plan (ISP), PIE notes, DLA-20’s, and other required documentation in a timely manner.
  - Makes routine home visits with all CSS residents, completing all case management tasks, and ensuring medication compliance.
  - Participating in weekly clinical rounds.
  - Collaborate with Passionate Center & Homes' Psychiatrist, Nurse Practitioner, and Clinical Staff.
  
  **Required Experience or Professional Qualifications:**
  - Must be licensed (or licensed eligible) in the Commonwealth of Virginia as a psychologist, licensed clinical social worker, or licensed professional counselor.
  - Must have a Bachelor’s degree or higher in human services; previous experience working with the target population preferred.
  - Qualified Development Disability Professional preferred.
  - Certified to administer medications in accordance with the requirements of Code of Virginia.
  
  **Minimum Knowledge, Skills, And Abilities:**
  - Knowledge of the characteristics and concepts of mental health, health disorders and related physical conditions, and multiple treatment modalities for adults with behavioral health/mental health challenges.
  - Knowledge of the Principles of Recovery.
  - Knowledge of common psychiatric conditions and best practice treatment approaches.
  - Ability to complete documentation in a thorough and timely manner.
  - Ability to implement mission, vision, values, policies, and procedures of Passionate Center & Homes.
  - Ability to maintain effective professional working relationships with clients, family members, staff, and collaborative community partners.
  
  **Job Type:** Full-time
  
  **Pay:** $45,000.00 - $55,000.00 per year
  
  **Expected hours:** Monday - Friday (8:00 a.m. - 4:00 p.m.) Must be available for emergency on-calls
  
  **Schedule:**
  - Monday to Friday

  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off
  
  **Others:**
  - Medical Specialty: Psychiatry
  - Ability to Commute: Alexandria, VA 22311 (Required)
  - Ability to Relocate: Alexandria, Virginia: Relocate before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: Hybrid, must be located within Virginia`
  },
  {
    id: 7,
    title: "Mental Health Clinician",
    location: "Alexandria, VA, USA",
    postedDate: "May 02, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for Full-TIME & PART-TIME Mental Health Clinician for our location in NOVA/ Alexandria, VA.
  
  **Position Summary:**
  This position is responsible to provide consolidated care management to each individual with serious mental health conditions and illnesses, participating in Passionate Center & Homes HCS community-based programs. The position includes completion of treatment plans, linking clients to community resources, medication management, mental health skill building, and client advocacy to support individuals.
  
  **Duties and Responsibilities:** 
  - Supports the mission, vision, and values of Passionate Center & Homes HCS.
  - Maintains standards of clinical care and compliance with all regulations applicable to programming including licensing and human rights standards.
  - Mandatory certification and training course requirements include CPR, First Aid, TOVA, and behavior management.
  - Completing documentation requirements for Person Centered Plans (PCP), PIE notes, DLA-20’s, and other required documentation in a timely manner.
  - Makes routine home visits with all CSS residents, completing all case management tasks, and ensuring medication compliance.
  - Participating in weekly clinical rounds.
  - Collaborate with Passionate Center & Homes' Psychiatrist, Nurse Practitioner, and Clinical Staff.
  
  **Required Experience or Professional Qualifications:**
  - Must be licensed (or licensed eligible) in the Commonwealth of Virginia as a psychologist, licensed clinical social worker, or licensed professional counselor.
  - Must have a Bachelor’s degree or higher in human services; previous experience working with the target population preferred.
  - Qualified Mental Health Professional preferred.
  - Certified to administer medications in accordance with the requirements of Code of Virginia.
  
  **Minimum Knowledge, Skills, And Abilities:**
  - Knowledge of the characteristics and concepts of mental health, health disorders, and related physical conditions, and multiple treatment modalities for adults with behavioral health/mental health challenges.
  - Knowledge of the Principles of Recovery.
  - Knowledge of common psychiatric conditions and best practice treatment approaches.
  - Ability to complete documentation in a thorough and timely manner.
  - Ability to implement mission, vision, values, policies, and procedures of Passionate Center & Homes.
  - Ability to maintain effective professional working relationships with clients, family members, staff, and collaborative community partners.
  
  **Job Type:** Full-time
  
  **Pay:** $45,000.00 - $55,000.00 per year
  
  **Expected hours:** Monday - Friday (8:00 a.m. - 4:00 p.m.) Must be available for emergency on-calls
    
  **Schedule:**
  - Monday to Friday

  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off

  **Others:**
  - Medical Specialty: Psychiatry
  - Ability to Commute: Alexandria, VA 22311 (Required)
  - Ability to Relocate: Alexandria, Virginia: Relocate before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: Hybrid, must be located within Virginia`
  },
  {
    id: 8,
    title: "Psychosocial Rehabilitation Program Specialist",
    location: "Alexandria, VA, USA",
    postedDate: "May 02, 2025",
    description: `Passionate Center & Homes HCS is currently recruiting for Full-TIME & PART-TIME PSR Program Specialist for our location in NOVA/ Alexandria, VA.
  
  **Position Summary:**
  This position is responsible for providing direct care to individuals with serious mental illness in a non-residential setting. The purpose of this position is to provide designated services and to ensure a healthy, safe, and supportive environment for individuals participating in the Passionate Center & Homes PSR program.
  
  **Duties and Responsibilities:**
  - Supports the mission, vision, and values of Passionate Center & Homes, Inc.
  - Develops, implements, and documents treatment groups as part of Gateway's Psychosocial Rehabilitation Program.
  - Monitors the physical environment of the facility and its equipment; takes appropriate measures to correct any identified safety hazard; ensures the environment is clean and orderly.
  - Documents resident care services by charting in resident and department records.
  - Maintains resident confidence and protects program operations by keeping information confidential.
  - Completes required documentation, including but not limited to monthly progress notes, and serious incident reports.
  - Protects residents and employees by adhering to infection-control policies and protocols.
  - Maintains resident confidence and protects program operations by keeping information confidential.
  - Assists the Psychosocial Rehabilitation Program Director in maintaining standards and regulations that are required by the program.
  - Keeps current with all mandatory training requirements including but not limited to CPR, First Aid, and TOVA.
  - Reports to Psychosocial Rehabilitation Program Director.
  - Supports the mission, vision, and values of Passionate Center & Homes HCS.
  - Maintains standards of clinical care and compliance with all regulations applicable to programming including licensing and human rights standards.
  - Mandatory certification and training course requirements include CPR, First Aid, TOVA, and behavior management.
  - Collaborate with Passionate Center & Homes' Psychiatrist, Nurse Practitioner, and Clinical Staff.
  
  **Required Experience or Professional Qualifications:**
  - Master's degree preferred in Human Services or Psychology.
  - One year of full-time or equivalent part-time work experience in the care of persons with serious mental illness, which has included developing and facilitating treatment groups.
  - Certified to administer medications in accordance with the requirements of Code of Virginia.
  
  **Minimum Knowledge, Skills, and Abilities:**
  - Knowledge of the characteristics and concepts of mental health, health disorders, and related physical conditions and treatment approaches for persons with serious mental illness.
  - Knowledge of simple nursing care, first-aid, behavioral management, personal and environmental hygiene.
  - Ability to implement and follow policies and procedures of the DBHDS and Passionate Center & Homes.
  - Ability to assist individuals in learning skills related to progress toward recovery.
  - Ability to engage individuals in developing new skills related to independence.
  - Ability to participate with professional staff in the design and implementation of training and programmatic activities.
  - Ability to observe the rights and personal dignity of others.
  - Ability to observe, record, and report clients' behavior, attitude, and physical condition.
  - Ability to perform simple math and communicate effectively, both orally and in writing.
  - Ability to stand, walk, and sit at various times during the shift and ability to lift at least 25 lbs.
  - Knowledge of the characteristics and concepts of mental health, health disorders, and related physical conditions and multiple treatment modalities for adults with behavioral health/mental health challenges.
  - Knowledge of the Principles of Recovery.
  - Knowledge of common psychiatric conditions and best practice treatment approaches.
  - Ability to complete documentation in a thorough and timely manner.
  - Ability to implement mission, vision, values, policies, and procedures of Passionate Center & Homes.
  - Ability to maintain effective professional working relationships with clients, family members, staff, and collaborative community partners.
  
  **Job Type:** Full-time
  
  **Pay:** $45,000.00 - $55,000.00 per year
  
  **Expected hours:** Monday - Friday (8:00 a.m. - 4:00 p.m.) Must be available for emergency on-calls
    
  **Schedule:**
  - 8 Hours Shift, Monday to Friday

  **Benefits:**
  - Bereavement leave
  - Employee assistance program
  - Flexible schedule
  - Paid time off
  
  **Others:**
  - Medical Specialty: Psychiatry
  - Ability to Commute: Alexandria, VA 22311 (Required)
  - Ability to Relocate: Alexandria, Virginia: Relocate before starting work (Required)
  - Willingness to travel: 25% (Required)
  - Work Location: In person`
  }
];

export default function CareersPage() {
  const [selectedJobId, setSelectedJobId] = useState<number>(jobs[0].id);
  const selectedJob = jobs.find((job) => job.id === selectedJobId)!;

  return (
    <div className="min-h-screen bg-neutral-lightest px-4 md:px-10 pb-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Job Nav Tabs */}
        <aside className="bg-white shadow rounded-md p-4 md:col-span-1 h-fit">
          <h2 className="text-lg font-semibold mb-4 text-fruit-salad">Open Roles</h2>
          <ul className="space-y-3">
            {jobs.map((job) => (
              <li
                key={job.id}
                onClick={() => setSelectedJobId(job.id)}
                className={`cursor-pointer px-3 py-2 rounded border-l-4 ${
                  job.id === selectedJobId
                    ? "bg-fruit-salad/10 border-fruit-salad text-fruit-salad font-medium"
                    : "hover:bg-neutral-light border-transparent"
                }`}
              >
                {job.title}
              </li>
            ))}
          </ul>
        </aside>

        {/* Job Detail Display */}
        <main className="bg-white shadow rounded-md p-6 md:col-span-3 relative">
          <h1 className="text-2xl font-bold text-fruit-salad mb-1">
            {selectedJob.title}
          </h1>
          <p className="text-sm text-neutral-medium mb-4">
            {selectedJob.location} • Posted on {selectedJob.postedDate}
          </p>
          <article className="whitespace-pre-wrap text-neutral-dark text-base leading-relaxed">
            {selectedJob.description}
          </article>

          {/* Apply Now button positioned at the top right */}
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <a href="/careers/apply">
              <Button size="large" variant="primary" icon="bx-send">
                Apply Now
              </Button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
