import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const industriesData = [
  {
    title: 'Automotive Manufacturing',
    description: 'Automotive Manufacturing is the process of designing, producing, and assembling vehicles, including cars, trucks, and motorcycles. It involves complex supply chains, advanced technology, and rigorous quality control.'
  },
  {
    title: 'Aerospace Manufacturing',
    description: 'Aerospace Manufacturing is the process of designing, building, testing, and producing aircraft, spacecraft, and their components. It involves advanced technologies and precise engineering to create complex products that operate in extreme environments.'
  },
  {
    title: 'Electronics Manufacturing',
    description: 'Electronics Manufacturing is the process of converting electronic components into finished products. This involves assembling printed circuit boards, integrating other components, and testing the final device to ensure quality and functionality.'
  },
  {
    title: 'Chemical Manufacturing',
    description: 'Chemical Manufacturing is the process of converting raw materials into chemical products through various physical and chemical processes. This involves large-scale production of chemicals for various industries and consumer products.'
  },
  {
    title: 'Food and Beverage Manufacturing',
    description: 'Food and Beverage Manufacturing is the process of converting raw materials into consumable food and drinks. This involves various stages like processing, packaging, and preparing products for distribution.'
  },
  {
    title: 'Textile Manufacturing',
    description: 'Textile Manufacturing is the process of converting raw fibers into yarn, and then weaving or knitting this yarn into fabric. These fabrics are then further processed, dyed, printed, and finished to create a wide range of products like clothing, home furnishings, and industrial textiles.'
  },
  {
    title: 'Metalworking and Machinery Manufacturing',
    description: 'Metalworking is the process of shaping metal into desired forms using various techniques. It involves cutting, bending, and forming metal to create products. Machinery manufacturing is the production of machines and tools used in various industries, including construction, agriculture, and manufacturing in general.'
  },
  {
    title: 'Plastics and Rubber Manufacturing',
    description: 'Plastics and Rubber Manufacturing is the process of converting raw materials like crude oil and natural rubber into a vast array of products through chemical and mechanical processes. This industry produces items from everyday household goods to industrial components.'
  },
  {
    title: 'Furniture Manufacturing',
    description: 'Furniture manufacturing is the process of creating furniture pieces through the transformation of raw materials into finished products. This involves design, cutting, shaping, assembling, and finishing materials like wood, metal, or plastic to produce functional and aesthetically pleasing items for homes or offices.'
  },
  {
    title: 'Medical Device Manufacturing',
    description: 'Medical Device Manufacturing is the process of creating instruments, equipment, or software used in healthcare for diagnosis, treatment, monitoring, or prevention of disease.'
  },
  {
    title: 'Energy and Utilities Manufacturing',
    description: 'Energy and Utilities Manufacturing encompasses the production of equipment, components, and systems used in the energy and utility sectors. This includes a wide range of products, from power generation equipment (turbines, generators) to transmission and distribution infrastructure (transformers, cables), and components for renewable energy systems (solar panels, wind turbines).'
  },
  {
    title: 'Construction and Building Materials Manufacturing',
    description: 'Construction & Building Materials Mfg: Making materials like cement, steel, bricks, glass, and wood for building houses, offices, and infrastructure.'
  }
];

const Industries = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Industries We Specialize In
      </Typography>
      <Typography variant="body1" color="text.secondary" component="p" align="center" sx={{ marginBottom: 4 }}>
        We provide tailored solutions across various manufacturing sectors, including:
      </Typography>
      <Grid container spacing={4}>
        {industriesData.map((industry, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: 2,
                borderRadius: 2,
                boxShadow: 2,
                bgcolor: 'background.paper',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  {industry.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {industry.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginY: 4 }} />
    </Box>
  );
};

export default Industries;
