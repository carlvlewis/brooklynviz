Brooklyn Visualization Demo
===========================

Uses **Radial Bubble Tree Visualization** code (from https://github.com/okfn/bubbletree with patches applied) to display Brooklyn
entities. Connects to the Brooklyn REST API to obtain a JSON object containing the full tree of all deployed applications and rendes them
as bubbles. The bubbles are sized according to the total number of child entities and coloured depending on the package name of
the entity type.

## Usage

Open the `index.html` file in a browser to view the Brooklyn entity tree. If you are running Brooklyn on a port other than
8081 you will need to modify the `brooklyn.js` file.

Copyright 2013 by Andrew Kennedy

> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
> 
>     http://www.apache.org/licenses/LICENSE-2.0
> 
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
