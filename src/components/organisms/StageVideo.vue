<template>
  <layout-default-container
    class="organism-stage-video"
  >
    <template slot="background">
      <atom-responsive-video
        v-if="video"
        v-bind="video"
      />
    </template>
  </layout-default-container>
</template>

<script>
import LayoutDefaultContainer from '@/components/layouts/DefaultContainer';
import AtomResponsiveVideo from '@/components/atoms/ResponsiveVideo';

export default {
  components: {
    LayoutDefaultContainer,
    AtomResponsiveVideo
  },

  props: {
    video: {
      type: Object,
      required: false,
      default () {
        return {
          poster: {
            placeholders: [
              {
                media: '(min-width: 576px)',
                format: 'jpg',
                // eslint-disable-next-line no-secrets/no-secrets
                url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9Ijc1QjU0MkYxRkVFMzdENzk5MDFDRDgwRDAwOURFRUI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4OTdCREZFNkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4OTdCREZENkUwQTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M2M0ZDFhODAtZGNhYy00ODc2LTkwYjAtOTMwNTIwZDg1MTg0IiBzdFJlZjpkb2N1bWVudElEPSI3NUI1NDJGMUZFRTM3RDc5OTAxQ0Q4MEQwMDlERUVCNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABEAHgMBEQACEQEDEQH/xAB/AAADAQEAAAAAAAAAAAAAAAAEBQYHCAEAAwEBAAAAAAAAAAAAAAAAAQIDBAAQAAEDAQUFBgcBAAAAAAAAAAECAwQRABIFBgchMUETNFGBsSIyFHGRcsIzQyQVEQACAQMBCAMAAAAAAAAAAAAAAQIRMQQhQVGRoVIDExThMmL/2gAMAwEAAhEDEQA/ANTwbPjUuMZDMBz2yR1BdQWid1EqHqpxtl999PMt6f65DCHn2OsO+5j0QgFSXGV1AA9QcSrzA8dlQbNHOp9lwOeJ0viBZn1Jy/hWCP4k2pUpxCUcqOkEFSnTdRerS6LM86Fo6sEcSddbEDF1nMjBJuKuww3MhltyOwP2sOLDaqpJ9aSTx7DZY5bo1XXf8FZYiTV6PYRTGVtR2pLc6LCci/57UaK4029fZW2mocSygG6Qb1VrI+ZNsyi6NPUZzVxhJwDUiJjH9WFmauSVjD2WHFLaU0mh5jl26Wtmyqtx4G0JYsmXj34oGzTp7rFiEK8xgvLjtp56YiZLDqy8DTlq8wv3RuNq9rFcbiyyIuxNR8palCPJivZXkIdUzdjMEpIU5zWyUJorZ5UqXU7Nnbavh1rUXznTED8a/rFtisYhxC6JXd4mwCAu9Wn4fbYB2Ai+vb7/AANmAf/Z'
              },
              {
                format: 'jpg',
                // eslint-disable-next-line no-secrets/no-secrets
                url: 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0NjAsIDIwMjAvMDUvMTItMTY6MDQ6MTcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9IjU0MTg5QUQyMjVGQjFBQzRENjU0NjQxN0UyQjU0M0QxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2NTdDRjMzNkUwRTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2NTdDRjMyNkUwRTExRUJBQkFDRkRCQjE5MTI2RTZCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGZlNGM5Y2ItZmE5OC00NWNkLWFkMmQtMzA2MzU1ZDllNTFmIiBzdFJlZjpkb2N1bWVudElEPSI1NDE4OUFEMjI1RkIxQUM0RDY1NDY0MTdFMkI1NDNEMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIADUAHgMBEQACEQEDEQH/xACDAAEAAgMBAAAAAAAAAAAAAAAABAcBBQYIAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQEQAAIBAgQGAQMFAAAAAAAAAAEDAgAEERIFBiExUSITB2FBMghxgcEUJBEAAgEDAgQDCQAAAAAAAAAAAAECESEDQRIxYZEF4SIEUYGx0TJSExQV/9oADAMBAAIRAxEAPwDypQCgFAKAUAoBQCgL5l609czsmZLRqXwJJm1zQMvQ8cv71hlkyVsyMpeY0zfXO1R5lqtmOctYmQts5iPHuMsDy+gPKpxyTdK2JKLk6I1btj7fhHHwkEjHL5Jkg9Dx+KuTkVbnUhx2jpBE/wDJLNEA4eSf1+catPXK5c2m7NurmyjLVHi0s4SMnxLIza4DiFrjicBLkZS5Vxsvd4btsI+Z6v6Y83T4I9x4JVrJ0RndqrJGmNstraNbycxS2MtlOlJ7hEYzWxpIiCs/Zl5n5rL6bPknLfnyO1lai5UXPWpq3wgqR1OdZtG4FjbXdx42NuVhsbNDpZ1CXd424jhPjlrpYO5wcnGadrbuFTHmwyi/K1f3kdO1L0272yRKDYyjkQZ4sZEkdgwOAy8cZGtH7+GvF0K9k6cUV7D3HuqEDAKtDE8hJczh+nfUH6HG/aXKCJaPem60nhY6dIdJJn/DKql2zG9ZdfAmrElX5BbuWDhp+mEmRkZSSwnu4kY+Xl06VXLs+J6y6+BJS5Esfkju0QMBouiiJ+4/1m5ieeObzc6q/h4/vydV8if5eSKlrtFQoBQCgFAKAUAoD//Z'
              }

            ],
            sources: [
              {
                format: 'webp',
                sizes: [
                  {
                    width: 576,
                    media: '(min-width: 576px)',
                    url: 'img/sample-a-16-9/576.webp'
                  },
                  {
                    width: 768,
                    media: '(min-width: 768px)',
                    url: 'video/16_9/poster/768.webp'
                  },
                  {
                    width: 1024,
                    media: '(min-width: 1024px)',
                    url: 'video/16_9/poster/992.webp'
                  },
                  {
                    width: 1200,
                    media: '(min-width: 1200px)',
                    url: 'video/16_9/poster/1200.webp'
                  },
                  {
                    width: 1600,
                    media: '(min-width: 1600px)',
                    url: 'video/16_9/poster/1600.webp'
                  }
                ]
              },
              {
                format: 'jpg',
                sizes: [
                  {
                    width: 576,
                    media: '(min-width: 576px)',
                    url: 'img/sample-a-16-9/576.jpg'
                  },
                  {
                    width: 768,
                    media: '(min-width: 768px)',
                    url: 'video/16_9/poster/768.jpg'
                  },
                  {
                    width: 1024,
                    media: '(min-width: 1024px)',
                    url: 'video/16_9/poster/992.jpg'
                  },
                  {
                    width: 1200,
                    media: '(min-width: 1200px)',
                    url: 'video/16_9/poster/1200.jpg'
                  },
                  {
                    width: 1600,
                    media: '(min-width: 1600px)',
                    url: 'video/16_9/poster/1600.jpg'
                  }
                ]
              },
              {
                format: 'webp',
                sizes: [
                  {
                    width: 414,
                    media: 'all',
                    url: 'video/9_16/poster/412.jpg'
                  }
                ]
              },
              {
                format: 'jpg',
                sizes: [
                  {
                    width: 414,
                    media: 'all',
                    url: 'video/9_16/poster/412.jpg'
                  }
                ]
              }
            ]
          }
        };
        // return {
        //   sources: [
        //     { media: 'default', srcset: 'video/9_16/poster/576.jpg' },
        //     { media: 'xs', srcset: 'video/16_9/poster/576.jpg' },
        //     { media: 'sm', srcset: 'video/16_9/poster/768.jpg' },
        //     { media: 'md', srcset: 'video/16_9/poster/992.jpg' },
        //     { media: 'lg', srcset: 'video/16_9/poster/1200.jpg' },
        //     { media: 'xl', srcset: 'video/16_9/poster/1600.jpg' }
        //   ]
        // };
      }
    }
  }
};
</script>

<style lang="postcss">
.organism-stage-video {
  position: relative;
  width: 100%;
}
</style>
