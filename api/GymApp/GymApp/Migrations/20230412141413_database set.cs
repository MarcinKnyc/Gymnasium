using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GymApp.Migrations
{
    /// <inheritdoc />
    public partial class databaseset : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Gyms",
                table: "Gyms");

            migrationBuilder.DropColumn(
                name: "GymId",
                table: "Gyms");

            migrationBuilder.RenameTable(
                name: "Gyms",
                newName: "Gym");

            migrationBuilder.AddColumn<Guid>(
                name: "Id",
                table: "Gym",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "OwnerId",
                table: "Gym",
                type: "uuid",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Gym",
                table: "Gym",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Surname = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pass",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PassName = table.Column<string>(type: "text", nullable: false),
                    PassDescription = table.Column<string>(type: "text", nullable: false),
                    Price = table.Column<float>(type: "real", nullable: false),
                    Duration = table.Column<int>(type: "integer", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pass", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Receptionist",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Surname = table.Column<string>(type: "text", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Receptionist", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Sector",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SectorName = table.Column<string>(type: "text", nullable: false),
                    GymId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sector", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sector_Gym_GymId",
                        column: x => x.GymId,
                        principalTable: "Gym",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PassBoughtEvent",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    PassId = table.Column<Guid>(type: "uuid", nullable: false),
                    ClientId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PassBoughtEvent", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PassBoughtEvent_Client_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Client",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PassBoughtEvent_Pass_PassId",
                        column: x => x.PassId,
                        principalTable: "Pass",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GymReceptionist",
                columns: table => new
                {
                    GymsId = table.Column<Guid>(type: "uuid", nullable: false),
                    ReceptionistsId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GymReceptionist", x => new { x.GymsId, x.ReceptionistsId });
                    table.ForeignKey(
                        name: "FK_GymReceptionist_Gym_GymsId",
                        column: x => x.GymsId,
                        principalTable: "Gym",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GymReceptionist_Receptionist_ReceptionistsId",
                        column: x => x.ReceptionistsId,
                        principalTable: "Receptionist",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Entrance",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    PassId = table.Column<Guid>(type: "uuid", nullable: false),
                    SectorId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entrance", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Entrance_Pass_PassId",
                        column: x => x.PassId,
                        principalTable: "Pass",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Entrance_Sector_SectorId",
                        column: x => x.SectorId,
                        principalTable: "Sector",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EntranceEvent",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    DateTime = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ClientId = table.Column<Guid>(type: "uuid", nullable: false),
                    EntranceId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EntranceEvent", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EntranceEvent_Client_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Client",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EntranceEvent_Entrance_EntranceId",
                        column: x => x.EntranceId,
                        principalTable: "Entrance",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Entrance_PassId",
                table: "Entrance",
                column: "PassId");

            migrationBuilder.CreateIndex(
                name: "IX_Entrance_SectorId",
                table: "Entrance",
                column: "SectorId");

            migrationBuilder.CreateIndex(
                name: "IX_EntranceEvent_ClientId",
                table: "EntranceEvent",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_EntranceEvent_EntranceId",
                table: "EntranceEvent",
                column: "EntranceId");

            migrationBuilder.CreateIndex(
                name: "IX_GymReceptionist_ReceptionistsId",
                table: "GymReceptionist",
                column: "ReceptionistsId");

            migrationBuilder.CreateIndex(
                name: "IX_PassBoughtEvent_ClientId",
                table: "PassBoughtEvent",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_PassBoughtEvent_PassId",
                table: "PassBoughtEvent",
                column: "PassId");

            migrationBuilder.CreateIndex(
                name: "IX_Sector_GymId",
                table: "Sector",
                column: "GymId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EntranceEvent");

            migrationBuilder.DropTable(
                name: "GymReceptionist");

            migrationBuilder.DropTable(
                name: "PassBoughtEvent");

            migrationBuilder.DropTable(
                name: "Entrance");

            migrationBuilder.DropTable(
                name: "Receptionist");

            migrationBuilder.DropTable(
                name: "Client");

            migrationBuilder.DropTable(
                name: "Pass");

            migrationBuilder.DropTable(
                name: "Sector");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Gym",
                table: "Gym");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Gym");

            migrationBuilder.DropColumn(
                name: "OwnerId",
                table: "Gym");

            migrationBuilder.RenameTable(
                name: "Gym",
                newName: "Gyms");

            migrationBuilder.AddColumn<int>(
                name: "GymId",
                table: "Gyms",
                type: "integer",
                nullable: false,
                defaultValue: 0)
                .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Gyms",
                table: "Gyms",
                column: "GymId");
        }
    }
}
