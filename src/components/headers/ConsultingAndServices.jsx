import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const consultingContent = [
  {
    title: 'Software Consulting & Services',
    sections: [
      {
        title: 'Technology Assessment',
        description: 'A thorough evaluation of your current systems to identify strengths, weaknesses, and opportunities for improvement.'
      },
      {
        title: 'Software Selection',
        description: 'Assistance in choosing the right software solutions that align with your business goals.'
      },
      {
        title: 'Process Optimization',
        description: 'Strategies to streamline your operations and enhance productivity through better use of technology.'
      }
    ]
  },
  {
    title: 'ERP Consulting - Our Process',
    sections: [
      {
        title: 'Diligent Requirement Assessment of Business',
        description: 'Comprehensive analysis to understand your business needs.'
      },
      {
        title: 'Compatibility Check of Softwares as per Business Requirement',
        description: 'Ensuring the selected software meets your specific requirements.'
      },
      {
        title: 'Selecting the Most Suitable ERP as per Your Budget and Requirements',
        description: 'Choosing the ERP solution that fits within your budget and meets your business needs.'
      }
    ]
  },
  {
    title: 'Software Implementation',
    sections: [
      {
        title: 'Project Management',
        description: 'Expert oversight to keep your project on track and within budget.'
      },
      {
        title: 'System Integration',
        description: 'Seamless integration of new software with your existing systems to ensure continuity.'
      },
      {
        title: 'Training & Support',
        description: 'Comprehensive training for your team and ongoing support to ensure successful adoption.'
      }
    ]
  },
  {
    title: 'Manufacturing Consulting',
    sections: [
      {
        title: 'Lean Manufacturing',
        description: 'Identify and eliminate waste, optimize workflows, and boost productivity.'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Improve inventory management, reduce lead times, and enhance supplier relationships.'
      },
      {
        title: 'Quality Improvement',
        description: 'Implement robust quality control systems, minimize defects, and exceed customer expectations.'
      },
      {
        title: 'Production Planning and Scheduling',
        description: 'Optimize resource allocation, balance workloads, and improve on-time delivery.'
      },
      {
        title: 'Technology Implementation',
        description: 'Leverage advanced technologies like IoT, AI, and automation to drive innovation.'
      }
    ]
  }
];

const ConsultingAndServices = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Consulting and Services
      </Typography>
      <Grid container spacing={4}>
        {consultingContent.map((section, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                {section.title}
              </Typography>
              {section.sections.map((item, idx) => (
                <Box key={idx} sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1">
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" gutterBottom>
        Visual Suggestion:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        An infographic or flowchart illustrating how DigiLime India’s services fit together to create a comprehensive solution for clients, with icons representing each service.
      </Typography>
      {/* Replace the below Box with an actual infographic or flowchart component */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', border: '1px dashed grey' }}>
        <Typography variant="body2">Infographic / Flowchart here</Typography>
      </Box>
    </Container>
  );
};

export default ConsultingAndServices;
