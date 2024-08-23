import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AerospaceAndDefense from './consultingAndServices/AerospaceAndDefense';
import AgricultureEquipment from './consultingAndServices/AgricultureEquipment';
import Automotive from './consultingAndServices/Automotive';
import ChemicalsAndPetrochemicals from './consultingAndServices/ChemicalsAndPetrochemicals';
import ConstructionMaterials from './consultingAndServices/ConstructionMaterials';
import ConsumerGoods from './consultingAndServices/ConsumerGoods';
import ElectronicsAndElectricalEquipment from './consultingAndServices/ElectronicsAndElectricalEquipment';
import EngineeringManufacturing from './consultingAndServices/EngineeringManufacturing';
import FoodAndBeverage from './consultingAndServices/FoodAndBeverage';
import FurnitureAndWoodProducts from './consultingAndServices/FurnitureAndWoodProducts';
import GlassAndCeramics from './consultingAndServices/GlassAndCeramics';
import IndustrialEquipment from './consultingAndServices/IndustrialEquipment';
import MedicalDevices from './consultingAndServices/MedicalDevices';
import MetalFabricationAndMachinery from './consultingAndServices/MetalFabricationAndMachinery';
import PaperAndPackaging from './consultingAndServices/PaperAndPackaging';
import PharmaceuticalsAndBiotechnology from './consultingAndServices/PharmaceuticalsAndBiotechnology';
import PlasticAndRubberProducts from './consultingAndServices/PlasticAndRubberProducts';
import RenewableEnergyEquipment from './consultingAndServices/RenewableEnergyEquipment';
import TextilesAndApparel from './consultingAndServices/TextilesAndApparel';
import About from './headers/About';
import Blog from './headers/Blog';
import Career from './headers/Career';
import CaseStudies from './headers/CaseStudies';
import ConsultingAndServices from './headers/ConsultingAndServices';
import ContactUs from './headers/ContactUs';
import Home from './headers/Home';
import Industries from './headers/Industries';


const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/consulting-and-services" element={<ConsultingAndServices />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Industries" element={<Industries />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/aerospace-and-defense" element={<AerospaceAndDefense />} />
        <Route path="/electronics-and-electrical-equipment" element={<ElectronicsAndElectricalEquipment />} />
        <Route path="/food-and-beverage" element={<FoodAndBeverage />} />
        <Route path="/pharmaceuticals-and-biotechnology" element={<PharmaceuticalsAndBiotechnology />} />
        <Route path="/chemicals-and-petrochemicals" element={<ChemicalsAndPetrochemicals />} />
        <Route path="/textiles-and-apparel" element={<TextilesAndApparel />} />
        <Route path="/metal-fabrication-and-machinery" element={<MetalFabricationAndMachinery />} />
        <Route path="/plastic-and-rubber-products" element={<PlasticAndRubberProducts />} />
        <Route path="/paper-and-packaging" element={<PaperAndPackaging />} />
        <Route path="/construction-materials" element={<ConstructionMaterials />} />
        <Route path="/medical-devices" element={<MedicalDevices />} />
        <Route path="/industrial-equipment" element={<IndustrialEquipment />} />
        <Route path="/furniture-and-wood-products" element={<FurnitureAndWoodProducts />} />
        <Route path="/agriculture-equipment" element={<AgricultureEquipment />} />
        <Route path="/glass-and-ceramics" element={<GlassAndCeramics />} />
        <Route path="/renewable-energy-equipment" element={<RenewableEnergyEquipment />} />
        <Route path="/engineering-manufacturing" element={<EngineeringManufacturing />} />
        <Route path="/consumer-goods" element={<ConsumerGoods />} />

      </Routes>
    </>
  )
}

export default Navigation;
